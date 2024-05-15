import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <h1>BAZAAR PLAZA</h1>
        <div className={styles.actions}>
          <Link><img src="/account-circle.svg" alt="" width={35} /></Link>
          <NavLink to="myCart"><img src="/cart.svg" alt="" width={35} /></NavLink>
        </div>
      </div>
      <nav>
        <NavLink to="/" className={styles.navLink}>Home</NavLink>
        <NavLink to="shop" className={styles.navLink}>Shop</NavLink>
      </nav>
    </header>
  )
}

export default Header