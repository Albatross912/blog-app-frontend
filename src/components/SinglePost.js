import React from "react";
import "../Styles/SinglePost.css";

export default function SinglePost({
  postLink,
  postImage,
  postTitle,
  postContent,
  postDate,
}) {
  const imageStyle = {
    backgroundImage: `url(${postImage})`,
  };

  return (
    <div>
      <a className="post-link" href={postLink}>
        <div className="post">
          <div className="post-image" style={imageStyle}></div>
          <div className="post-content">
            <div className="post-date">{postDate}</div>
            <div className="post-title">
              <h4>{postTitle}</h4>
            </div>
            <div className="post-text">
              <p>{postContent}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
