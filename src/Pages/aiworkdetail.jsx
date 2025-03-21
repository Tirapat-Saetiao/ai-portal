import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/aiWorkDetail.css"; // Import external CSS

const Aiworkdetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://ai.mfu.ac.th/wp-json/wp/v2/posts/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;
    if (!post) return <p className="no-post">Post not found</p>;

    return (
        <div className="word-detail-container">
            <h1 className="word-detail-title">{post.title.rendered}</h1>
            {post.yoast_head_json?.og_image?.[0]?.url && (
                <img src={post.yoast_head_json.og_image[0].url} alt="Post Thumbnail" className="word-detail-image" />
            )}
            
            <div
                className="word-detail-content2"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
        </div>
    );
};

export default Aiworkdetail;
