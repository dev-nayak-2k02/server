import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../home/Landing.module.css'
import photos from '../../assets/photos.jpg'
import vector from '../../assets/vector.jpg'
const Landing = () => {
  return (
    <div className={styles.mainBody}>
        <div className={styles.navbar}></div>
        <div className={styles.hero}>
          <div className={styles.left}>
              <h1>Effortless Task Management</h1>
              <p>Stay organized productive with our powerful todo app manage your tasks and never miss a deadline.</p>
              <div className={styles.buttons}>
                <Link className={styles.linkButtons} to="/Login"><button>Login</button></Link>
                <Link className={styles.linkButtons} to="/Register"><button>Register</button></Link>
                
              </div>
          </div>
          <div className={styles.right}>
            <figure>
              <img className={styles.image} src={vector} alt="" />
            </figure>
          </div>
        </div>
    </div>
  )
}

export default Landing