import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const isActive = (path) => {
    return location.pathname === path ? "pink" : "grey";
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    const filteredSearchTerm = e.target.value
      .toLowerCase()
      .replace(/\b(the|business)\b/g, "");

    console.log("Filtered Search Term:", filteredSearchTerm);
  };

  return (
    <div>
      <div className="header">
        <div className="logic">
          <img src="/as.jpg" alt="Alt text" />
        </div>
        <div className="linkovi">
          <ul>
            <Link to={"/"} style={{ color: isActive("/") }}>
              Home
            </Link>
          </ul>
          <ul>
            <Link to={"/articles"} style={{ color: isActive("/articles") }}>
              Articles
            </Link>
          </ul>
          <ul>
            <Link to={"/categories"} style={{ color: isActive("/categories") }}>
              Categories
            </Link>
          </ul>
          <ul>
            <Link to={"/contact"} style={{ color: isActive("/contact") }}>
              Contact
            </Link>
          </ul>
        </div>
        <input
          className="pretrazi"
          type="text"
          disabled={false}
          placeholder="Search"
          size="lg"
          variant="soft"
          onChange={handleSearchChange}
        />
      </div>
      <hr />
    </div>
  );
};

export default Header;
