import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={`${styles.navbar} container`}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "22px",
          fontFamily: "Josefin Sans, sans-serif",
        }}
      >
        🎙️ <span style={{ fontSize: "23px" }}>TalkHub</span>
      </Link>
    </nav>
  );
}

export default Navigation;
