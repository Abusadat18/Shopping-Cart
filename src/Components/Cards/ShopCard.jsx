import React, { useState } from 'react'
import styles from '../Shop/Shop.module.css'
import { useOutletContext } from 'react-router-dom';

function ShopCard({product}) {

  const [counterValue, setCounterValue] = useState(1);

  const {cart, setCart, addToCart, updateCart} = useOutletContext()

  const decrement = () => {
    if(counterValue > 1 ){
        setCounterValue(counterValue - 1)
    }
  }

  const increment = () => {
    if(counterValue < 31 ){
        setCounterValue(counterValue + 1)
    }
  }

  const counterHandler = (e) => {
    if(e.target.value < 31) {
        setCounterValue(e.target.value)
    } else {
        setCounterValue(30)
    }
  }

  function isPresent(id){
    for(let i=0 ; i<cart.length ; i++){
        if(cart[i].id === id){
            return true
        }
    }
    return false
  }

  function add(){
    console.log(isPresent(product.id));
    if(isPresent(product.id)){
        updateCart(product.id, counterValue)
    }
    else {
        addToCart(product, counterValue)
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
                    <input className={styles.counterInput} type="number" id="" value={counterValue} onChange={counterHandler} />
                    <button onClick={increment} className={styles.counterBtn}>+</button>
                </div>
            </div>
        </div>
        <div className={styles.row2}>
            <button onClick={add} className={styles.addCartBtn}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ShopCard