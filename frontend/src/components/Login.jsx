import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Questionnaire from "./Questionnaire";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false); // Toggle for forgot password popup
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [message, setMessage] = useState(""); // Success/Error message
  const [showQuestionnaire, setShowQuestionnaire] = useState(false); // State to control Questionnaire popup
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setShowQuestionnaire(true); // Show Questionnaire popup
      onClose(); // Close the login popup
    } catch (err) {
      console.error("Login Error:", err.response.data);
      setMessage(err.response.data.message || "Login failed");
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forgot-password", { phoneNumber });
      setMessage("A reset link has been sent to your phone.");
      setShowForgotPassword(false);
      navigate("/reset-password");
    } catch (err) {
      console.error("Forgot Password Error:", err.response.data);
      setMessage(err.response.data.message || "Failed to send reset link");
    }
  };

  return (
    <div>
      {/* Show the login form if the questionnaire is not visible */}
      {!showQuestionnaire && (
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
          <h1 className="text-3xl font-extrabold text-center text-gray-800">Welcome Back</h1>
          <p className="text-center text-gray-600">Please login to your account</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
            </div>

            <p className="text-sm text-center text-gray-600">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </p>
          </form>

          {/* Forgot Password Popup */}
          {showForgotPassword && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-lg font-bold mb-4 text-gray-800">Forgot Password</h2>
                <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 transition duration-300"
                    >
                      Send Reset Link
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(false)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                {message && (
                  <p className="text-sm text-green-500 mt-4">{message}</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Show the Questionnaire as a full-screen popup */}
      {showQuestionnaire && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="w-full h-full">
            <Questionnaire />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
