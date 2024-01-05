import { useState } from "react";
import "./header.css";

const Header = () => {
  const [active, SetActive] = useState(0);
  return (
    <div>
      <div className="header">
        <div className="logic">
          <img src="/as.jpg" alt="Alt text" />
        </div>
        <div className="linkovi">
          <ul>
            <a
              href=""
              style={{ color: active === 1 ? "pink" : "grey" }}
              onClick={() => {
                if (active === 1) {
                  SetActive(0);
                } else {
                  SetActive(1);
                }
              }}
            >
              home
            </a>
          </ul>
          <ul>
            <a
              href=""
              style={{ color: active === 2 ? "pink" : "grey" }}
              onClick={() => {
                if (active === 2) {
                  SetActive(0);
                } else {
                  SetActive(2);
                }
              }}
            >
              articles
            </a>
          </ul>
          <ul>
            <a
              href=""
              style={{ color: active === 3 ? "pink" : "grey" }}
              onClick={() => {
                if (active === 3) {
                  SetActive(0);
                } else {
                  SetActive(3);
                }
              }}
            >
              categories
            </a>
          </ul>
          <ul>
            <a
              href=""
              style={{ color: active === 4 ? "pink" : "grey" }}
              onClick={() => {
                if (active === 4) {
                  SetActive(0);
                } else {
                  SetActive(4);
                }
              }}
            >
              contact
            </a>
          </ul>
          <ul>
            <a
              href=""
              style={{ color: active === 5 ? "pink" : "grey" }}
              onClick={() => {
                if (active === 5) {
                  SetActive(0);
                } else {
                  SetActive(5);
                }
              }}
            >
              about
            </a>
          </ul>
        </div>
        <input
          className="pretrazi"
          type="text"
          disabled={false}
          placeholder="search"
          size="lg"
          variant="soft"
        />
      </div>
    </div>
  );
};

export default Header;
