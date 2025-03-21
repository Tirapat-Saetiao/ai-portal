import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/SpecialBlog.css";

const allowedDomain = "lamduan.mfu.ac.th";

const SpecialBlog = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || !storedUser.email.endsWith(`@${allowedDomain}`)) {
      alert("You don’t have permission to access this content. Redirecting to login...");
      setTimeout(() => navigate("/login", { replace: true }), 500);
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) {
    return null; // Prevent rendering until authentication is confirmed
  }

  return (
    <div className="special-blog-container">
      <h2>Special Blog Page</h2>
      <p>Only authorized users from @{allowedDomain} can see this content.</p>
      <button
        className="special-blog-button"
        onClick={() => alert("Welcome to the Special Blog!")}
      >
        Access Special Blog
      </button>
    </div>
  );
};

export default SpecialBlog;
