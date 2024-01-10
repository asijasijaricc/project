import React from "react";

function Layout({ header, paragraph, text }) {
  return (
    <div>
      <h4>{header}</h4>
      <p style={{ color: "pink" }}>{paragraph}</p>
      <h3>{text}</h3>
    </div>
  );
}

export default Layout;
