import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AIArticle from "./Pages/ai-article";
import Contact from "./Pages/contact";
import Tools from "./Pages/tools";
import Home from "./Pages/home";
import LoginPage from "./Pages/login";
import AIWork from "./Pages/ai-work";
import GenAI from "./Pages/gen-ai";
import Workflow from "./Pages/Workflow";
import Aiworkdetail from "./Pages/aiworkdetail";
import SpecialBlog from "./Pages/SpecialBlog";
import ProtectedRoute from "./ProtectedRoute"; // ✅ Ensure this is imported

const clientId = "1051486378939-b9jdhnev5o10pvn2kgo6h5iu7h6757ej.apps.googleusercontent.com"; // Replace with actual Client ID
const allowedDomain = "lamduan.mfu.ac.th"; // Organization domain

/** ✅ Main App Component */
function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  /** ✅ Load User Data on Mount */
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email.endsWith(`@${allowedDomain}`)) {
      setLoggedIn(true);
      setUserData(storedUser);
    }
  }, []);

  /** ✅ Handle Login */
  const handleLogin = (user) => {
    if (user.email.endsWith(`@${allowedDomain}`)) {
      localStorage.setItem("user", JSON.stringify(user));
      setLoggedIn(true);
      setUserData(user);
      navigate("/home"); // Redirect after login
    } else {
      alert("Access Denied: Only @lamduan.mfu.ac.th emails can log in.");
    }
  };

  /** ✅ Handle Logout */
  const handleLogout = () => {
    setIsLoggingOut(true); // ✅ Prevent alert while logging out
    localStorage.removeItem("user");
    setLoggedIn(false);
    setUserData(null);
    navigate("/login", { replace: true });

    // ✅ Reset `isLoggingOut` after redirect completes
    setTimeout(() => setIsLoggingOut(false), 500);
  };

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ai-article" element={<AIArticle />} />
        <Route path="/ai-work" element={<AIWork />} />
        <Route path="/gen-ai" element={<GenAI />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/post/:id" element={<Aiworkdetail />} />
        <Route
          path="/special-blog"
          element={
            <ProtectedRoute isLoggingOut={isLoggingOut}>
              <SpecialBlog />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default AppWithRouter;
