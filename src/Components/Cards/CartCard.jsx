import React from 'react'
import styles from '../Cart/Cart.module.css'

function CartCard({product}) {
  return (
    <div className={styles.card}>
        <img src={product.image} alt="" width={100} />
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.counterCtn}>
            <button className={styles.counterBtn}>-</button>
            <input className={styles.counterInput} type="number"  />
            <button className={styles.counterBtn}>+</button>
        </div>
        <h3 className={styles.productPrice}>Rs{product.price}</h3>
        <button className={styles.deleteBtn}><img src="/delete.svg" alt="" /></button>
    </div>
  )
}

export default CartCard