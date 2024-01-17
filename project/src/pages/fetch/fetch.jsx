import React from "react";

const BlogArticle = ({ title, content }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogArticle;
