import React from 'react'
import styles from  "./Login.module.css"
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div  className={styles.login}>
       <div className={styles.card}>
        <div className={styles.left}>
            <h1>Hello World.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, asperiores. Minima aspernatur</p>
            <span>didn't have account?</span>
            <Link to="/register" ><button>Register</button></Link>
            
        </div>
        <div className={styles.right}>
            <h1>Login</h1>
            <form >
                <input type="text" placeholder='Username' />
                <input type="Password" placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
        </div>    
    </div>
  )
}

export default Login;
