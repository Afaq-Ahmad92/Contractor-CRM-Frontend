import React, { useEffect } from "react";
import MainLayout from "../components/partners/MainLayout";
import useApi from "../utils/useApi";
import ContextProvider from "../components/partners/partnersContext";
const ContactsPage = () => {
  const { fetchData } = useApi();
  useEffect(() => {
    fetchData("/api/employ/", {
      method: "GET",
    });
  }, []);

  return (
    <ContextProvider>
      <MainLayout />
    </ContextProvider>
  );
};

export default ContactsPage;
