import React from "react";
import styles from "./Home.module.css";
import Stories from "./Stories";
import Post from "./Post";

function Home() {
  return (
    <div className={styles.home}>
      <Stories />
      <Post />
    </div>
  );
}

export default Home;
