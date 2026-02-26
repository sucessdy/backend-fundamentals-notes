import { useEffect, useState } from "react";
import "../style/Feed.css";
import api from "../api/axios.js";

function Feed() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await api.get("/posts");
        console.log(res.data); // 🔥 DEBUG LINE
        setPost(res.data.posts);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <section className="feed-section">
      <h1>Feed</h1>

      {posts.length > 0 ? (
        posts.map((e) => (
          <div className="post-card" key={e._id}>
            <img src={e.image} alt="post" />
            <p className="post-caption">{e.caption}</p>
          </div>
        ))
      ) : (
        <h1 className="no-post">No post is available</h1>
      )}
    </section>
  );
}

export default Feed;