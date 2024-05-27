import React from 'react'
import styles from '../Cart/Cart.module.css'
import { useOutletContext } from 'react-router-dom'

function CartCard({product}) {

  const {incrementCart, decrementCart} = useOutletContext()

  const increment = () => {
    incrementCart(product.id)
  }

  const decrement = () => {
    decrementCart(product.id)
  }

  return (
    <div className={styles.card}>
        <img src={product.image} alt="" width={100} />
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.counterCtn}>
            <button onClick={decrement} className={styles.counterBtn}>-</button>
            <input value={product.count} className={styles.counterInput} type="number"  />
            <button onClick={increment} className={styles.counterBtn}>+</button>
        </div>
        <h3 className={styles.productPrice}>${product.totalPrice}</h3>
        <button className={styles.deleteBtn}><img src="/delete.svg" alt="" /></button>
    </div>
  )
}

export default CartCard