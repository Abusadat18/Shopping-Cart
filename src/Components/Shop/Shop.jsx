import React from 'react'
import { useOutletContext } from 'react-router-dom'
import ShopCard from '../Cards/ShopCard'
import styles from '../Shop/Shop.module.css'

function Shop() {

  const {products, error, loading} = useOutletContext()

  if(loading) return <main>Loading..du..duu..</main>
  if(error) return <main>Try again 😑</main>

  return (
    <main className={styles.cardsCtn}>
      {products.map((product) => (
        <ShopCard key={product.id} product={product} />
      ))}
    </main>
  )
}

export default Shop