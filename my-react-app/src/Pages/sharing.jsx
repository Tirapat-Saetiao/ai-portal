import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:1337/api/blogposts?populate=*"; // Ensures images are included

function Sharing() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log("API Response:", response.data); // Debugging API response
        if (response.data && response.data.data) {
          setPosts(response.data.data); // Store all blog posts
        } else {
          setPosts([]); // Handle empty data response
        }
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (posts.length === 0) return <p>Error: No blog posts available</p>;

  return (
    <div>
      <h1>Blogs post for today</h1>
      <ul>
        {posts.map((post) => {
          const title = post.title || "Untitled Post"; // Directly access title
          const description =
            post.context?.[0]?.children?.[0]?.text || "No description available.";

          // Directly access image from `image` object
          const imageUrl = post.image?.formats?.thumbnail?.url;

          return (
            <li key={post.id} className="mb-4">
              <h2 className="text-lg font-bold">{title}</h2>
              <p>{description}</p>
              {imageUrl ? (
                <img
                  src={`http://localhost:1337${imageUrl}`}
                  alt={title}
                  className="w-64 h-auto rounded-lg shadow-md"
                />
              ) : (
                <p>No image available</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sharing;
