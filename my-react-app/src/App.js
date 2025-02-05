import { GoogleOAuthProvider } from '@react-oauth/google';
import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AIService from './Pages/aiService';
import Contact from './Pages/contact';
import Home from './Pages/home';
import LoginPage from './Pages/login';
import Sharing from './Pages/sharing';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ai-service" element={<AIService />} />
        <Route path="/sharing" element={<Sharing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> {}
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default AppWithRouter;
