import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import Header from "./Header";

export default function Posts() {
  // Declare blogs as a state variable
  const [blogs, setBlogs] = useState([]);
  const API_URL = "https://backend-blog-app-ivjj.onrender.com/api/posts";
  const API_BASE_URL = "https://backend-blog-app-ivjj.onrender.com/";

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

  const currentDate = new Date().toDateString(); // Get current date

  return (
      <div>
        <Header />
        <div className="main">
          <div className="main-container blog-posts">
            {blogs.map((blog) => (
                <SinglePost
                    key={blog._id}
                    postLink={`/post/${blog._id}`}
                    postImage={API_BASE_URL + blog.post_image}
                    postTitle={blog.title}
                    postContent={blog.content}
                    postDate={currentDate} // Pass the current date
                />
            ))}
          </div>
        </div>
      </div>
  );
}
