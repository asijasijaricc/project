import React from "react";

function Layout({ header, paragraph, text }) {
  return (
    <div>
      <h2>{header}</h2>
      <p style={{ color: "pink" }}>{paragraph}</p>
      <h3>{text}</h3>
    </div>
  );
}

export default Layout;
