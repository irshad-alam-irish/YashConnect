import React from "react";
import styles from "./Stories.module.css";
function Stories() {
  const stories = [
    {
      id: 1,
      name: "irish alam",
      image:
        "https://cdn.pixabay.com/photo/2014/10/15/22/17/apple-490485_1280.jpg",
    },
    {
      id: 2,
      name: "irish alam",
      image:
        "https://cdn.pixabay.com/photo/2014/10/15/22/17/apple-490485_1280.jpg",
    },
    {
      id: 3,
      name: "irish alam",
      image:
        "https://cdn.pixabay.com/photo/2014/10/15/22/17/apple-490485_1280.jpg",
    },
  ];
  return (
    <div className={styles.Stories}>
      <div className={styles.user}>
        <img
          src="https://cdn.pixabay.com/photo/2014/10/15/22/17/apple-490485_1280.jpg"
          alt="error"
        />
        <span className={styles.span1}>Yash alam</span>
        <span className={styles.span2}>
          <h1>+</h1>
        </span>
      </div>

      {stories.map((story) => (
        <div className={styles.storyItems}>
          <img src={story.image} alt="error" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
