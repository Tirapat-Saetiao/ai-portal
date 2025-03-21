import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hep.css";

const AiPortal = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const texts = [
    "MFU AI Knowledge Hub",
    "Workflow and Automation",
    "Learn Gen Ai",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="ai-portal">
      <div className="hero-section">
        <div className="hero-content">
          <p className="ai-label">AI PORTAL FOR MFU</p>
          <h2 className="hero-text">{texts[currentSlide]}</h2>
        </div>
      </div>
    </div>
  );
};

export default AiPortal;
