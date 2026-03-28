import React from 'react'
// import './Header.module.css'
import styles from './Header.module.css'
// import styles2 from './header_btn.css'
// it will bnot work bc z modular css uses extension .module.css

const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.logo}>Amazon</h3>
      {/* <button className='btn'>Login</button> */}
      <button className={styles.btn}>Login</button> 
      {/*  now it only apply css from inside the styles css only ( btn insdie header.module.css)  */}

      {/* <button className={styles2.btn}>Login</button>  */}
    </div>
  )
}

export default Header
