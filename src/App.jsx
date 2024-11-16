// // // // src/App.jsx
// // // import React from 'react';
// // // import MainLayout from './components/MainLayout';
// // // import './index.css';

// // // function App() {
// // //   return (
// // //     <MainLayout />
// // //   );
// // // }

// // // export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Sidebar from "./components/Sidebar";
// // import ContactsPage from "./pages/ContactsPage";
// // import MarketplacePage from "./pages/MarketplacePage";
// // import AccountsPage from "./pages/AccountsPage";
// // import InvoicesPage from "./pages/InvoicesPage";
// // import WorkflowsPage from "./pages/WorkflowsPage";
// // import InsightsPage from "./pages/InsightsPage";
// // import WhatsNewPage from "./pages/WhatsNewPage";
// // import SupportPage from "./pages/SupportPage";

// // import './index.css';
// // const App = () => {
// //   return (
// //     <Router>
// //       <div className="flex">
// //         {/* Sidebar */}
// //         <Sidebar />

// //         {/* Main Content */}
// //         <div className="flex-1 p-4">
// //           <Routes>
// //             <Route path="/" element={<ContactsPage/>} />
// //             <Route path="/marketplace" element={<MarketplacePage />} />
// //             <Route path="/accounts" element={<AccountsPage />} />
// //             <Route path="/invoices" element={<InvoicesPage />} />
// //             <Route path="/workflows" element={<WorkflowsPage />} />
// //             <Route path="/insights" element={<InsightsPage />} />
// //             <Route path="/whats-new" element={<WhatsNewPage />} />
// //             <Route path="/support" element={<SupportPage />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import ContactsPage from "./pages/ContactsPage";
// import MarketplacePage from "./pages/MarketplacePage";
// import AccountsPage from "./pages/AccountsPage";
// import InvoicesPage from "./pages/InvoicesPage";
// import WorkflowsPage from "./pages/WorkflowsPage";
// import InsightsPage from "./pages/InsightsPage";
// import WhatsNewPage from "./pages/WhatsNewPage";
// import SupportPage from "./pages/SupportPage";
// import LoginPage from "./pages/LoginPage";

// import "./index.css";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <div className="flex">
//         {/* Check if user is authenticated */}
//         {isAuthenticated ? (
//           <>
//             {/* Sidebar */}
//             <Sidebar />

//             {/* Main Content */}
//             <div className="flex-1 p-4">
//               <Routes>
//                 <Route path="/" element={<ContactsPage />} />
//                 <Route path="/marketplace" element={<MarketplacePage />} />
//                 <Route path="/accounts" element={<AccountsPage />} />
//                 <Route path="/invoices" element={<InvoicesPage />} />
//                 <Route path="/workflows" element={<WorkflowsPage />} />
//                 <Route path="/insights" element={<InsightsPage />} />
//                 <Route path="/whats-new" element={<WhatsNewPage />} />
//                 <Route path="/support" element={<SupportPage />} />
//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </Routes>
//             </div>
//           </>
//         ) : (
//           <Routes>
//             {/* Redirect to login if not authenticated */}
//             <Route
//               path="/login"
//               element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
//             />
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// };

// export default App;



import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex">
        {isAuthenticated ? (
          <>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<ContactsPage />} />
                <Route path="/marketplace" element={<MarketplacePage />} />
                <Route path="/accounts" element={<AccountsPage />} />
                <Route path="/invoices" element={<InvoicesPage />} />
                <Route path="/workflows" element={<WorkflowsPage />} />
                <Route path="/insights" element={<InsightsPage />} />
                <Route path="/whats-new" element={<WhatsNewPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            {/* Redirect to login */}
            <Route
              path="/login"
              element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;

