import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await api.post("/create-post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/feed");
    } catch (err) {
      console.error(err);
      alert("Error creating post");
    }
  };

  return (
    <section className="create-post-section">
      <h1>Create post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" required />
        <input
          type="text"
          name="caption"
          placeholder="Enter caption"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;