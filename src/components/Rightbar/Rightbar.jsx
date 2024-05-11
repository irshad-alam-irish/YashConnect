import React from "react";
import styles from "./Rightbar.module.css";
import Yash from "../../assets/yash.jpg";
function Rightbar() {
  return (
    <div className={styles.right}>
      <div className={styles.container}>
        <div className={styles.items}>
          <span className={styles.tags}>Suggestion for you</span>

          <div className={styles.user}>
            <div>
              <img src={Yash} alt="" />
              <span>Yash Alam</span>
            </div>
            <div>
              <button className={styles.btn1}>Follow </button>
              <button className={styles.btn2}>Dismiss </button>
            </div>
          </div>
          <div className={styles.user}>
            <div>
              <img src={Yash} alt="" />
              <span>Yash Alam</span>
            </div>
            <div>
              <button className={styles.btn1}>Follow </button>
              <button className={styles.btn2}>Dismiss </button>
            </div>
          </div>
          <div className={styles.user}>
            <div>
              <img src={Yash} alt="" />
              <span>Yash Alam</span>
            </div>
            <div className={styles.btns}>
              <button className={styles.btn1}>Follow </button>
              <button className={styles.btn2}>Dismiss </button>
            </div>
          </div>
        </div>

        <div className={styles.items}>
          <span className={styles.tags}>Latest activities</span>

          <div className={styles.user}>
            <div className={styles.tags}>
              <img src={Yash} alt="" />
              <p>
                <span>Yash Alam</span> changed thier cover pic
              </p>
            </div>
            <div className={styles.tags}>1 min ago</div>
          </div>

          <div className={styles.user}>
            <div className={styles.tags}>
              <img src={Yash} alt="" />
              <p>
                <span>Yash Alam</span> changed thier cover pic
              </p>
            </div>
            <div className={styles.tags}>1 min ago</div>
          </div>
          <div className={styles.user}>
            <div className={styles.tags}>
              <img src={Yash} alt="" />
              <p>
                <span>Yash Alam</span> changed thier cover pic
              </p>
            </div>
            <div className={styles.tags}>1 min ago</div>
          </div>
        </div>
        {/* -----------online friends------- */}
        <div className={styles.items}>
          <span className={styles.tags}>Online Friends</span>
          <div className={styles.user}>
            <div className="userInfo">
              <img src={Yash} alt="" />

              <span>Yash Alam</span>
              <div className={styles.online} />
            </div>
          </div>
          <div className={styles.user}>
            <div className="userInfo">
              <img src={Yash} alt="" />

              <span>Yash Alam</span>
              <div className={styles.online} />
            </div>
          </div>
          <div className={styles.user}>
            <div className="userInfo">
              <img src={Yash} alt="" />

              <span>Yash Alam</span>
              <div className={styles.online} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
