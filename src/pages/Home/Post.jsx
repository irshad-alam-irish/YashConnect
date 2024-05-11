import React from "react";
import styles from "./Post.module.css";
function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.user_info}>
          <div>
            <img src="../../../src/assets/yash.jpg" alt="" />
          </div>
          <div className={styles.name_time}>
            <div className={styles.user_name}>Irshad</div>
            <div className={styles.post_time}>1 min ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
