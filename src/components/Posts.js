import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import Header from "./Header";

export default function Posts() {
  // Declare blogs as a state variable
  const [blogs, setBlogs] = useState([]);
  const API_URL = "http://localhost:3002/api/posts";
  const API_BASE_URL = "http://localhost:3002/";

  useEffect(() => {
    // Use the useEffect hook to fetch data when the component mounts
    getPosts();
  }, []);

  const getPosts = () => {
    fetch(API_URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the blogs state with fetched data
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  return (
    <div>
      <Header>  </Header>
    <div className="main">
      <div className="main-container blog-posts">
        {blogs.map((blog, index) => (
          <SinglePost
            key={index}
            postLink={`/post/:id${blog.id}`}
            postImage={API_BASE_URL + blog.post_image}
            postTitle={blog.title}
            postContent={blog.content}
            postDate={new Date(parseInt(blog.added_date)).toDateString()}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
