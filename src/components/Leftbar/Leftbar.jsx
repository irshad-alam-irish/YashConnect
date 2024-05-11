import React from "react";
import styles from "./Leftbar.module.css";

import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import Yash from "../../assets/yash.jpg";

function Leftbar() {
  return (
    <div className={styles.left}>
      <div className={styles.container}>
        <div className={styles.user}>
          <img src={Yash} alt="error" />
          <span>Yash</span>
        </div>
        <div className={styles.items}>
          <img src={Friends} alt="" />
          <span>friends</span>
        </div>
        <div className={styles.items}>
          <img src={Groups} alt="" />
          <span>Groups</span>
        </div>
        <div className={styles.items}>
          <img src={Market} alt="" />
          <span>Marketplace</span>
        </div>
        <div className={styles.items}>
          <img src={Watch} alt="" />
          <span>Watch</span>
        </div>
        <div className={styles.items}>
          <img src={Memories} alt="" />
          <span>Memories</span>
        </div>

        <hr />
        <div className={styles.menu}>
          <span className={styles.tags}>Your shortcuts</span>
          <div className={styles.items}>
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className={styles.items}>
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className={styles.items}>
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className={styles.items}>
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className={styles.items}>
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className={styles.others}>
        <span className={styles.tags}>Your shortcuts</span>
          <div className={styles.items}>
            <img src={Fund} alt="" />
            <span>Fundraisers</span>
          </div>
          <div className={styles.items}>
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className={styles.items}>
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Leftbar;
