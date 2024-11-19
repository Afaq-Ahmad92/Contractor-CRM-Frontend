import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ContactsPage from "./pages/ContactsPage";
import MarketplacePage from "./pages/MarketplacePage";
import AccountsPage from "./pages/AccountsPage";
import InvoicesPage from "./pages/InvoicesPage";
import WorkflowsPage from "./pages/WorkflowsPage";
import InsightsPage from "./pages/InsightsPage";
import WhatsNewPage from "./pages/WhatsNewPage";
import SupportPage from "./pages/SupportPage";
import LoginPage from "./pages/LoginPage";
import "./index.css";
import { useStateContext } from "./context/store";

const App = () => {
  const hasSidebar = () => {
    const pathname = window.location.pathname;
    console.log(pathname, "pathname");
    return pathname !== "/login";
  };

  const pages = [
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <ContactsPage />,
    },
    {
      path: "/marketplace",
      element: <MarketplacePage />,
    },
    {
      path: "/accounts",
      element: <AccountsPage />,
    },
    {
      path: "/invoices",
      element: <InvoicesPage />,
    },
    {
      path: "/workflows",
      element: <WorkflowsPage />,
    },
    {
      path: "/insights",
      element: <InsightsPage />,
    },
    {
      path: "/whats-new",
      element: <WhatsNewPage />,
    },
    {
      path: "/support",
      element: <SupportPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  return (
    <Router>
      <div className="flex">
        <>
          {/* Sidebar */}
          {hasSidebar() && <Sidebar />}

          {/* Main Content */}
          <div className="flex-1">
            <Routes>
              {pages?.map((page) => (
                <Route path={page?.path} element={page?.element} />
              ))}
            </Routes>
          </div>
        </>
      </div>
    </Router>
  );
};

export default App;
