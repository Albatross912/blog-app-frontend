import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

export default function Posts() {
  // Declare blogs as a state variable
  const [blogs, setBlogs] = useState([]);
  const API_URL = "http://localhost:3000/api/posts";
  const API_BASE_URL = "http://localhost:3000/";

  useEffect(() => {
    // Use the useEffect hook to fetch data when the component mounts
    getPosts();
  }, []);

  const getPosts = () => {
    fetch(API_URL, {
      method: "GET",
    })
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  };

  return (
    <div className="main">
      <div className="main-container blog-posts">
        {blogs.map((blog, index) => (
          <SinglePost
            key={index}
            postLink={`/post.html?id=${blog.id}`}
            postImage={API_BASE_URL + blog.post_image}
            postTitle={blog.title}
            postContent={blog.content}
            postDate={new Date(parseInt(blog.added_date)).toDateString()}
          />
        ))}
      </div>
    </div>
  );
}
