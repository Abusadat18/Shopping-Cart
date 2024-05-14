import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header.jsx"

function App() {
  
  return (
    <>
     <Header/>
     <Outlet/>
    </>
  )
}

export default App
