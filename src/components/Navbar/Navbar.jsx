import React from "react";
import styles from "./Navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Yash from '../../assets/yash.jpg'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <span>YashConnect</span>
        <HomeIcon />
        <DarkModeIcon />
        <GridViewIcon />
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder="search..." />
        </div>
      </div>
      <div className={styles.right}>
        <PersonOutlineIcon />
        <EmailIcon />
        <NotificationsIcon />
        <div className={styles.user}>
          <img src={Yash} alt="" />
          <span>Yash Alam</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
