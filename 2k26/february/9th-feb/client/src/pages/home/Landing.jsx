import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../home/Landing.module.css'
import photos from '../../assets/photos.jpg'
const Landing = () => {
  return (
    <div className={styles.mainBody}>
        <div className={styles.navbar}></div>
        <div className={styles.hero}>
          <div className={styles.left}>
              <h1>Effortless Task Management</h1>
              <p>Stay organized productive with our powerful todo app manage your tasks and never miss a deadline.</p>
              <div className={styles.buttons}>
                <button>Login</button>
                <button>Register</button>
              </div>
          </div>
          <div className={styles.right}>
            <figure>
              <img src={photos} alt="" />
            </figure>
          </div>
        </div>
    </div>
  )
}

export default Landing