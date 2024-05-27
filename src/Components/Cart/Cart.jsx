import React from 'react'
import styles from './Cart.module.css'
import { useOutletContext } from 'react-router-dom'
import CartCard from '../Cards/CartCard'

function Cart() {

  const [, , , cart, setCart] = useOutletContext()
  console.log(cart);

  return (
    <section className={styles.cartSection}>
      <h2>My Cart</h2>
      <div className={styles.cartCtn}>
        <div className={styles.cartInfo}>
          <div className={styles.cartInfoHeader}>
            <h3>2 Items</h3>
            <h3>Total: Rs1400</h3>
          </div>
          <div className={styles.cardsCtn}>
            {cart.map((product) => (
              <CartCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
        <div className={styles.paymentInfoCtn}>
          <h3>Payment Details</h3>
          <div className={styles.paymentInfo}>
            <div>
              <p>Subtotal</p>
              <p>Rs1400</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>Rs200</p>
            </div>
            <div>
              <p>Total</p>
              <p>1600</p>
            </div>
          </div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </section>
  )
}

export default Cart