import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../CSS/login.css";

const allowedDomain = "lamduan.mfu.ac.th";

const LoginPage = ({ onLogin, userData }) => {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false); // ✅ Track login status

  const handleSuccess = (response) => {
    try {
      if (!response.credential) {
        alert("Login failed. Please try again.");
        return;
      }

      const userObject = jwtDecode(response.credential);
      const userEmail = userObject.email;

      if (!userEmail.endsWith(`@${allowedDomain}`)) {
        alert("❌ Access Denied: Only @lamduan.mfu.ac.th emails can log in.");
        return;
      }

      // ✅ Immediately update UI to show success message
      setLoginSuccess(true);
      onLogin(userObject);

      // ✅ Redirect smoothly after 1 second
      setTimeout(() => {
        navigate("/home");
      }, 1000);

    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login with Google</h2>
      {loginSuccess ? (
        <p className="login-message success">✅ Login successful! Redirecting...</p>
      ) : userData ? (
        <p className="login-message">✅ Logged in as {userData.name}</p>
      ) : (
        <p>Please log in</p>
      )}
      <div className="google-login-button">
        <GoogleLogin onSuccess={handleSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
