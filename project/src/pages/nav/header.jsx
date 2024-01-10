import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "pink" : "grey";
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
          <ul>
            <Link to={"/about"} style={{ color: isActive("/about") }}>
              About
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
        />
      </div>
    </div>
  );
};

export default Header;
