import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header.jsx"
import useData from "./Hooks/useData.jsx"
import { useState } from "react"

function App() {
  
  const [products, error, loading] = useData()
  const [cart, setCart] = useState([])

  function addToCart(item, count){
    setCart((prev) => [...prev,{id: item.id, title: item.title, price: item.price, image: item.image, count: count, totalPrice: item.price * count}])
  }

  function updateCart(id, count){
    setCart((prev) => prev.map((item) => item.id === id ? {...item, count: (item.count + count), totalPrice: (item.count + count) * item.price} : item))
  }

  function incrementCart(id){
    setCart((prev) => prev.map((item) => item.id === id ? {...item, count: (item.count + 1), totalPrice: (item.count + 1) * item.price} : item))
  }

  function decrementCart(id){
    setCart((prev) => prev.map((item) => item.id === id ? {...item, count: Math.max(0, (item.count - 1)), totalPrice: Math.max(0,(item.count - 1)) * item.price} : item))
  }

  function getTotal(){
    let total = 0
    cart.forEach((item) => {
      total += item.totalPrice
    })
    return total
  }

  return (
    <>
     <Header/>
     <Outlet context={{products, error, loading, cart, setCart, addToCart, updateCart, getTotal, incrementCart, decrementCart}}/>
    </>
  )
}

export default App
