import React from "react";
import styles from "./Registere.module.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="Password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.container}>
            <h1>Yash Connect.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
              asperiores. Minima aspernatur
            </p>
            <span>Do you have an account?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
