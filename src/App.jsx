
import { Outlet } from "react-router-dom"

import { Footer } from "./components/Footer"

export function App() {
  return (
    <>
    <div className="container"> 
      <div className="outlet">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  
    </>
  )
}


