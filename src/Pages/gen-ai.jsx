import React, { useState, useEffect } from "react";

const YouTubeUploader = () => {
  const [videoLink, setVideoLink] = useState("");
  const [videos, setVideos] = useState([]);

  // Load videos from localStorage on component mount
  useEffect(() => {
    const storedVideos = localStorage.getItem("videos");
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  // Save videos to localStorage whenever they change
  useEffect(() => {
    if (videos.length > 0) {
      localStorage.setItem("videos", JSON.stringify(videos));
    }
  }, [videos]);

  // Extract YouTube Video ID
  const extractVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Handle Upload
  const handleUpload = () => {
    if (!videoLink.trim()) {
      alert("Please enter a YouTube link.");
      return;
    }

    const id = extractVideoId(videoLink);
    if (id) {
      if (!videos.some((video) => video.id === id)) {
        const newVideos = [...videos, { id, link: videoLink }];
        setVideos(newVideos); // Update State
        localStorage.setItem("videos", JSON.stringify(newVideos)); // Ensure immediate save
        setVideoLink(""); // Clear input
      } else {
        alert("This video is already added.");
      }
    } else {
      alert("Invalid YouTube link. Please enter a valid URL.");
    }
  };

  // Handle Video Deletion
  const handleDelete = (id) => {
    const filteredVideos = videos.filter((video) => video.id !== id);
    setVideos(filteredVideos);
    localStorage.setItem("videos", JSON.stringify(filteredVideos)); // Remove from localStorage
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder="Please Enter YouTube video URL"
          style={{ flex: 1, padding: "8px", fontSize: "16px" }}
        />
        <button onClick={handleUpload} style={{ padding: "8px 15px", fontSize: "16px", cursor: "pointer" }}>
          Upload
        </button>
      </div>

      {videos.length > 0 && (
        <div>
          <h3>Uploaded Videos</h3>
          {videos.map((video, index) => (
            <div key={index} style={{ marginTop: "20px", textAlign: "center" }}>
              <p>
                <strong>Video {index + 1}:</strong> {video.link}
                <button 
                  onClick={() => handleDelete(video.id)} 
                  style={{ marginLeft: "10px", padding: "5px 10px", cursor: "pointer", background: "red", color: "white", border: "none" }}
                >
                  Delete
                </button>
              </p>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YouTubeUploader;
