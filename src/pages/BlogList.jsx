import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

// Your Strapi Cloud API URL
const API_BASE = "https://fearless-deer-e22470fa33.strapiapp.com";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/posts?populate=*`);
      const json = await res.json();

      if (!json.data) {
        console.error("Invalid Strapi response:", json);
        setPosts([]);
      } else {
        setPosts(json.data);
      }
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div className="blog-loading">Loading...</div>;

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-title">Latest Blogs</h1>

      {posts.length === 0 && <p className="blog-no-posts">No posts found.</p>}

      <div className="posts-grid">
        {posts.map((post) => {
          const p = post;

          // ✅ FIX — Cloud URL already includes full link
          const coverUrl = p?.Cover?.url || null;

          return (
            <div key={p.id} className="blog-post-card">
              {/* COVER IMAGE */}
              {coverUrl && (
                <img
                  src={coverUrl}
                  alt={p.Title}
                  className="post-cover-image"
                />
              )}

              <div className="post-card-content">
                <h2 className="post-card-title">{p.Title || "Untitled Post"}</h2>

                {p.Slug ? (
                  <Link to={`/blog/${p.Slug}`} className="post-read-more">
                    Read More →
                  </Link>
                ) : (
                  <span className="post-no-slug">No slug available</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
