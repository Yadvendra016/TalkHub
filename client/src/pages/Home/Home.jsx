import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

// import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();
  const startRegister = () => {
    navigate("/authenticate");
  };
  return (
    <div className={styles.cardWrapper}>
      <Card title="🎙️ TalkHub: Where Ideas Resonate">
        <p className={styles.text}>
          Join discussions led by speakers on various topics and become a valued
          part of our community. Discover a dynamic space where every voice
          matters. TalkHub – where ideas find their home and conversations come
          alive!
        </p>

        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
        <div className={styles.signinWrapper}>
          <span style={{ color: "#0077ff" }}>Have an invite text?</span>
          <Link
            style={{
              color: "#0077ff",
              fontWeight: "bold",
              textDecoration: "none",
              marginLeft: "12px",
            }}
            to="/login"
          >
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Home;
