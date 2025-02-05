import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import One from '../Assets/004.jpg';
import Two from '../Assets/005.jpg';
import Three from '../Assets/009.jpg';
import Four from '../Assets/010.jpg';
import './Hep.css';

const AiPortal = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const colors = ["#774aa4", "#83659d", "#42326e"]; 
  const texts = [
    "General Information about Mae Fah Luang University.",
    "Explore the campus and its history.",
    "Learn about academic programs and research."
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % texts.length);
    }, 3000); 

    return () => clearInterval(slideInterval); 
  }, []);

  const handleHeroClick = () => {
    navigate("/ai-content"); 
  };

  return (
    <div className="ai-portal">
      <div className="hero-section" onClick={handleHeroClick} style={{ backgroundColor: colors[currentSlide] }}>
        <div className="hero-content">
          <p className="ai-label">AI Content</p>
          <h2 className="hero-text">{texts[currentSlide]}</h2>
        </div>
      </div>

      <h2 className="services-header">MFU CustomGPT Service</h2>

      <div className="services-section">
        <div className="services-grid">
          <div className="service-card" onClick={() => navigate("/mfu-gpt")}>
            <img src={One} alt="MFU-GPT" />
            <h3>MFU-GPT</h3>
            <p>General Information about Mae Fah Luang University</p>
            <a href="#">Explore...</a>
          </div>
          <div className="service-card" onClick={() => navigate("/mfu-expert-gpt")}>
            <img src={Two} alt="MFU-Expert-GPT" />
            <h3>MFU-Expert-GPT</h3>
            <p>MFU Expert findings from research publication</p>
            <a href="#">Explore...</a>
          </div>
          <div className="service-card" onClick={() => navigate("/mfu-tor-gpt")}>
            <img src={Three} alt="MFU-TOR-GPT" />
            <h3>MFU-TOR-GPT</h3>
            <p>Help to generate TOR for procurement</p>
            <a href="#">Explore...</a>
          </div>
          <div className="service-card" onClick={() => navigate("/mfu-library-gpt")}>
            <img src={Four} alt="MFU-Library-GPT" />
            <h3>MFU-Library-GPT</h3>
            <p>Advice to find a suitable book for learners and researchers</p>
            <a href="#">Explore...</a>
          </div>
        </div>
      </div>

      {}
      <div className="upcoming-events" style={{ backgroundColor: "#e0e0e0" }}>
        <h3>Upcoming Events</h3>
        <div className="event-list">
          <div className="event-item"><strong>February 15, 2025:</strong> Academic Conference on AI</div>
          <div className="event-item"><strong>March 5, 2025:</strong> Research Symposium</div>
          <div className="event-item"><strong>April 10, 2025:</strong> Tech Workshop</div>
        </div>
      </div>

      {}
      <div className="usecase-sharing" style={{ backgroundColor: "#d1c4e9" }}>
        <h3>Usecase & Prompt Sharing</h3>
        <div className="prompt-boxes">
          <div className="prompt-box">
            <h4>Prompt Example 1</h4>
            <p>How to generate research summaries using AI?</p>
          </div>
          <div className="prompt-box">
            <h4>Prompt Example 2</h4>
            <p>Best practices for AI in education.</p>
          </div>
          <div className="prompt-box">
            <h4>Prompt Example 3</h4>
            <p>Tips for using AI to assist in academic writing.</p>
          </div>
        </div>
      </div>

      {}
      <div className="ai-experts" style={{ backgroundColor: "#b39ddb" }}>
        <h3>AI Experts</h3>
        <div className="expert-grid">
          <div className="expert-card">
            <img src={One} alt="Expert 1" className="expert-image"/>
            <h4>Dr. Jane Doe</h4>
            <p>AI Researcher, Department of AI & Robotics</p>
          </div>
          <div className="expert-card">
            <img src={Two} alt="Expert 2" className="expert-image"/>
            <h4>Dr. John Smith</h4>
            <p>AI Ethics Specialist, Department of Computer Science</p>
          </div>
          <div className="expert-card">
            <img src={Three} alt="Expert 3" className="expert-image"/>
            <h4>Prof. Mary Johnson</h4>
            <p>AI in Education Expert, Faculty of Engineering</p>
          </div>
        </div>
      </div>

      {}
      <div className="top-videos">
  <h2>Top Tutorial Videos</h2>
  <div className="video-links">
    <div className="video-frame">
      <iframe
        width="100%"
        height="100%"
        src="https://youtu.be/Yq0QkCxoTHM"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Tutorial Video 1"
      ></iframe>
    </div>
    <div className="video-frame">
      <iframe
        width="100%"
        height="100%"
        src="https://youtu.be/h2FDq3agImI"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Tutorial Video 2"
      ></iframe>
    </div>
    <div className="video-frame">
      <iframe
        width="100%"
        height="100%"
        src="https://youtu.be/nVyD6THcvDQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Tutorial Video 3"
      ></iframe>
    </div>
  </div>
</div>

    </div>
  );
};

export default AiPortal;
