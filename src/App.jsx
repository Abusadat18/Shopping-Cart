import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header.jsx"
import useData from "./Hooks/useData.jsx"
import { useState } from "react"

function App() {
  
  const [products, error, loading] = useData()
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }
  ])

  return (
    <>
     <Header/>
     <Outlet context={[products, error, loading, cart, setCart]}/>
    </>
  )
}

export default App
