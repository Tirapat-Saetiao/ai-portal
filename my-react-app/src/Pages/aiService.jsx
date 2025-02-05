import React, { useState, useEffect } from "react";
import axios from "axios";
import '../CSS/video.css';


const API_URL = "http://localhost:1337/api/videos?populate=*"; // Ensure videos are included

function AiService() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log("🚀 API Response:", response.data); // Debugging API response
        if (response.data && response.data.data) {
          setPosts(response.data.data);
        } else {
          setPosts([]);
        }
      })
      .catch((error) => {
        console.error("❌ Error fetching blog posts:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (posts.length === 0) return <p>No blog posts available</p>;

  return (
    <div className="blog-container">
      <h1>test video</h1>
      {posts.map((post) => {
        console.log("📝 Post Debug:", post); // Debugging each post

        const title = post?.title || "Untitled Post";

        // ✅ Corrected video extraction
        const videoUrl = post?.video?.[0]?.url
          ? `http://localhost:1337${post.video[0].url}`
          : null;

        return (
          <div key={post.id} className="blog-post">
            <h2>{title}</h2>
            {videoUrl && (
              <video controls className="blog-video">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          
          </div>
        );
      })}

    </div>
  );
}

export default AiService;
