import React from "react";
import '../CSS/aiService.css';
import logo1 from '../components/Assets/logo.jpg'; 
import logo2 from '../components/Assets/sdgg.png';

const AiServicePage = () => {
    return (
      <div className="ai-service-page">
        <header className="hero-section">
          <div className="hero-content">
            <h1 className="hero-text">MFU CustomGPT Service</h1>
          </div>
        </header>
        <div className="service-container">
          <div className="service-card">
            <a href="https://chatgpt.com/g/g-r2MRrAmKM-mfu-gpt" className="service-link">
              <div className="logo-box">
                <img src={logo1} alt="Logo 1" className="service-logo" />
              </div>
              <div className="service-info">
                <p className="service-description">Q&A about Mae Fah Luang University</p>
              </div>
              <button className="service-btn">MFU-GPT
              </button>
            </a>
          </div>
          <div className="service-card">
            <a href="https://chatgpt.com/g/g-DYIuutLV6-mfu-sdg-gpt" className="service-link">
              <div className="logo-box">
                <img src={logo2} alt="Logo 2" className="service-logo" />
              </div>
              <div className="service-info">
                <p className="service-description">Assist in analyzing projects and their relevance to each SDG.</p>
              </div>
              <button className="service-btn">MFU-SDG-GPT</button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
export default AiServicePage;
