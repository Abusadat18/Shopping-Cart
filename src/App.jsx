import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header.jsx"
import useData from "./Hooks/useData.jsx"

function App() {
  
  const [products, error, loading] = useData()

  return (
    <>
     <Header/>
     <Outlet/>
    </>
  )
}

export default App
