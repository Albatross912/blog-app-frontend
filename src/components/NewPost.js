import React, { useState } from "react";
import "../Styles/NewPost.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NewHeader from "./NewHeader";
// import { useHistory } from "react-router-dom";

export default function NewPost() {
  const API_URL = "https://backend-blog-app-ivjj.onrender.com/api/newpost";
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  //   const history = useHistory();

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", postTitle);
      formData.append("content", postContent);
      formData.append("post-image", postImage);

      // Send a POST request with form data
      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for sending FormData
        },
      });

      // Handle the response here, e.g., display a success message
      console.log("Post created successfully:", response.data);

      //   history.push("/");
      // Redirect to another page if needed
      window.location.href = "/";
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="container new-post-page">
      <NewHeader
        backgroundImage={
          "https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg"
        }
      ></NewHeader>
      <div className="main">
        <div className="main-container">
          <div className="navigation">
            <Link className="Home" to={"/"}>back</Link>
          </div>
          <div className="form-container">
            <form>
              <input
                id="form-post-title"
                type="text"
                name="post-title"
                placeholder="Post Title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
              <textarea
                id="form-post-content"
                name="post-content"
                placeholder="Post Content"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              ></textarea>
              <div>
                <label htmlFor="form-post-image">Choose Image</label>
                <input
                  type="file"
                  id="form-post-image"
                  name="post-image"
                  accept="image/*"
                  onChange={(e) => setPostImage(e.target.files[0])}
                />
              </div>
              <button
                id="form-post-submit"
                type="button"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
