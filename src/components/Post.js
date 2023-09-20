import React, { useEffect, useState } from "react";
import "../Styles/Post.css";
import Axios from "axios";
import { Link, useParams } from "react-router-dom"; // Import useParams
import NewHeader from "./NewHeader";

export default function Post() {
  const [post, setPost] = useState({});
  const { post_id } = useParams(); // Use useParams to get post_id
  const API_URL = "http://localhost:3002/post";

  useEffect(() => {
    // Use the useEffect hook to fetch data when the component mounts
    getPost();
  }, [post_id]); // Trigger the effect whenever post_id changes

  const getPost = async () => {
    const result = post_id.replace(/^:id/, "");
    const url = `${API_URL}/${result}`;
    try {
      const response = await Axios.get(url);
      setPost(response.data); // Update the post state with the retrieved data
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };
  const realDate = new Date(parseInt(post.added_date)).toDateString();
  return (
    <div>
      <NewHeader backgroundImage={"http://localhost:3002/"+post.post_image}></NewHeader>
      <div className="main">
        <div className="main-container">
          <div className="navigation">
            <Link className="redirect" to={"/"}>
              back
            </Link>
          </div>
          <div className="post-container">
            <div id="individual-post-title">{post.title}</div>
            <div id="individual-post-date">{`Published on ${realDate}`}</div>
            <div id="individual-post-content">{post.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
