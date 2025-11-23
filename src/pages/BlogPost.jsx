import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles.css';

const API_BASE = "https://fearless-deer-e22470fa33.strapiapp.com";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    try {
      // Updated to Strapi Cloud URL
      const url = `${API_BASE}/api/posts?filters[Slug][$eq]=${slug}&populate=*`;
      const res = await fetch(url);
      const json = await res.json();

      if (json.data && json.data.length > 0) {
        setPost(json.data[0]);
      } else {
        setPost(null);
      }
    } catch (err) {
      console.error("POST FETCH ERROR:", err);
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [slug]);

  if (loading) return <div className="blog-loading">Loading...</div>;
  if (!post) return <h1 className="blog-error">Post not found</h1>;

  const p = post;

  // FIXED: Strapi Cloud already returns full URL (no need to prepend)
  const coverUrl = p?.Cover?.url || null;

  return (
    <div className="blog-post-page">
      <h1 className="post-title">{p.Title || "Untitled Post"}</h1>

      {/* COVER IMAGE */}
      {coverUrl && (
        <img
          src={coverUrl}
          alt={p.Title}
          className="post-cover-image-single"
        />
      )}

      {/* CONTENT BLOCK */}
      <div className="post-content-body">
        {Array.isArray(p.Content) ? (
          p.Content.map((block, i) => (
            <p key={i} className="post-paragraph">
              {Array.isArray(block.children)
                ? block.children.map((child) => child.text).join("")
                : ""}
            </p>
          ))
        ) : (
          <p className="post-no-content">No content available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
