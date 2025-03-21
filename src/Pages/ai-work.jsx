import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/aiWork.css"; // Import external CSS

const Wordhome = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://ai.mfu.ac.th/wp-json/wp/v2/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) {
                    setPosts(data);
                } else {
                    throw new Error("Invalid data format");
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Function to redirect to another page with full post content
    const handleReadMore = (postId) => {
        navigate(`/post/${postId}`);
    };

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;
    if (!posts.length) return <p className="no-posts">No blog posts available</p>;

    return (
        <div className="blog-container">
            <h1 className="blog-title">AI Blog Posts</h1>

            <div className="blog-scroll-wrapper">
                {Array.from({ length: Math.ceil(posts.length / 3) }, (_, i) => (
                    <div key={i} className="blog-row">
                        {posts.slice(i * 3, i * 3 + 3).map((post) => (
                            <div key={post.id} className="blog-post">
                                <h2 className="post-title">{post?.title?.rendered || "Untitled"}</h2>

                                {post?.yoast_head_json?.og_image?.[0]?.url && (
                                    <img
                                        src={post.yoast_head_json.og_image[0].url}
                                        alt="Post Thumbnail"
                                        className="post-image"
                                    />
                                )}

                                {/* Short Excerpt */}
                                <div
                                    className="post-excerpt"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            post?.excerpt?.rendered
                                                ? post.excerpt.rendered.length > 150 
                                                    ? post.excerpt.rendered.substring(0, 150) + "..."
                                                    : post.excerpt.rendered
                                                : "No preview available",
                                    }}
                                ></div>

                                {/* "Read More" Button to Redirect */}
                                <button onClick={() => handleReadMore(post.id)} className="read-more">
                                    Read More
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Wordhome;
