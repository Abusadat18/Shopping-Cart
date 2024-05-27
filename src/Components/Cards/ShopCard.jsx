import React, { useState } from 'react'
import styles from '../Shop/Shop.module.css'

function ShopCard({product}) {

  const [counterValue, setCounterValue] = useState(1);

  const decrement = () => {
    if(counterValue > 0 ){
        setCounterValue(counterValue - 1)
    }
  }

  const increment = () => {
    if(counterValue < 100 ){
        setCounterValue(counterValue + 1)
    }
  }

  return (
    <div className={styles.card}>
        <div className={styles.row1}>
            <img className={styles.productImage} src={product.image} alt="" />
            <div className={styles.productInfo}>
                <h2 className={styles.productTitle}>{product.title}</h2>
                <h3 className={styles.productPrice}>${product.price}</h3>
                <div className={styles.counter}>
                    <button onClick={decrement} className={styles.counterBtn}>-</button>
                    <input className={styles.counterInput} type="number" id="" value={counterValue} onChange={(e) => setCounterValue(e.target.value) } />
                    <button onClick={increment} className={styles.counterBtn}>+</button>
                </div>
            </div>
        </div>
        <div className={styles.row2}>
            <button className={styles.addCartBtn}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ShopCard