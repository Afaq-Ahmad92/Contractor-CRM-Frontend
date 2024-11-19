import React, { useEffect } from "react";
import MainLayout from "../components/partners/MainLayout";
import useApi from "../utils/useApi";
const ContactsPage = () => {
  const { fetchData } = useApi();
  useEffect(() => {
    fetchData("/api/employ/", {
      method: "GET",
    });
  }, []);

  return (
    <>
      <MainLayout />
    </>
  );
};

export default ContactsPage;
