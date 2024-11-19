import { useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/store";
const baseUrl = process.env.REACT_APP_BASE_URL;

const useApi = () => {
  const navigate = useNavigate();
  /**
   * Function to make an API request.
   * @param {string} url - The API endpoint.
   * @param {object} options - Axios request options (method, headers, data, etc.).
   * @param {function} callBack
   * @returns {Promise<{ data: any, error: any }>}
   */
  const fetchData = useCallback(async (url, options = {}, callBack) => {
    let response = null;
    let error = null;

    try {
      const res = await axios({
        url: baseUrl + url,
        ...options,
        withCredentials: true,
        headers: {
          ...options?.headers,
          credentials: "include",
        },
      });
      response = res.data;
      callBack(response);
    } catch (err) {
      console.log(err.response);
      if (err.response?.data.message === "unauthenticated") {
        navigate("/login");
      }
    }

    return { response, error };
  }, []);

  return { fetchData };
};

export default useApi;
