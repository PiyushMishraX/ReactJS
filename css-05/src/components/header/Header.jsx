import React from 'react'
// import './Header.module.css'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Amazon</h3>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header
