// // src/pages/LoginPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (email === "admin@gmail.com" && password === "admin123") {
//       navigate("/"); // Redirect to the dashboard
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="flex w-full items-center justify-center min-h-screen bg-orange-500">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <div className="text-center mb-6">
//           <img
//             src="https://via.placeholder.com/100" // Placeholder logo
//             alt="Logo"
//             className="mx-auto mb-4"
//           />
//           <h1 className="text-2xl font-semibold">Login to ProCenter</h1>
//         </div>
//         <button
//           className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded mb-4 flex items-center justify-center"
//         >
//           <img
//             src="https://img.icons8.com/color/20/000000/google-logo.png"
//             alt="Google"
//             className="mr-2"
//           />
//           Continue with Google
//         </button>
//         <div className="text-center text-gray-500 mb-4">OR</div>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 border rounded mb-4"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 border rounded mb-4"
//         />
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         >
//           Login with Email
//         </button>
//         <div className="text-center mt-4">
//           <p className="text-sm text-gray-500">
//             Don’t worry if you don’t have a password or can’t remember it.
//             <br />
//             We can email you a secure link.
//           </p>
//           <button className="mt-2 w-full bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">
//             Email me a secure login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      setIsAuthenticated(true); // Update authentication state
      navigate("/"); // Redirect to home/dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-orange-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          
          <h1 className="text-2xl font-semibold">Login to Contractor CRM</h1>
        </div>
        <button
          className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded mb-4 flex items-center justify-center"
        >
          <img
            src="https://img.icons8.com/color/20/000000/google-logo.png"
            alt="Google"
            className="mr-2"
          />
          Continue with Google
        </button>
        <div className="text-center text-gray-500 mb-4">OR</div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Login with Email
        </button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Don’t worry if you don’t have a password or can’t remember it.
            <br />
            We can email you a secure link.
          </p>
          <button className="mt-2 w-full bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">
            Email me a secure login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
