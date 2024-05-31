import React, { useEffect, useState } from "react";
import "../Styles/Post.css";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";
import NewHeader from "./NewHeader";

export default function Post() {
  const [post, setPost] = useState({});
  const { post_id } = useParams();
  const API_URL = "https://backend-blog-app-ivjj.onrender.com/post";

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await Axios.get(`${API_URL}/${post_id}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  // Convert added_date to a Date object
  const realDate = post.added_date ? new Date(post.added_date).toDateString() : '';

  return (
      <div>
        <NewHeader backgroundImage={`https://backend-blog-app-ivjj.onrender.com/${post.post_image}`} />
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
