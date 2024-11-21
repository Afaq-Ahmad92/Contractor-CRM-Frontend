import React, { useEffect } from "react";
import MainLayout from "../components/partners/MainLayout";
import useApi from "../utils/useApi";
import ContextProvider from "../components/partners/partnersContext";
import { useStateContext } from "../context/store";
import { useLocation } from "react-router-dom";
const ContactsPage = () => {
  const { pathname } = useLocation();
  const { setIsSidebar } = useStateContext();
  const { fetchData } = useApi();
  useEffect(() => {
    fetchData("/api/employ/", {
      method: "GET",
    });
  }, []);
  useEffect(() => {
    setIsSidebar(pathname !== "/login");
  }, [pathname]);

  return (
    <ContextProvider>
      <MainLayout />
    </ContextProvider>
  );
};

export default ContactsPage;
