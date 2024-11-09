import React from "react"
import "./App.css"
import "./index.css"
import Navbar from "./Components/Navbar"
import Product from "./Components/Product"
import Footer from "./Components/Footer"
import UseRefHook from "./Components/UseRefHook"
import Form from "./Components/Form"


const App = () => {
  return (
    <>
  <Navbar />
    
    
    <div className="bg-black">
    <Product />
    </div>
    <Form />
    <Footer />
    
    <UseRefHook />
    </>
    )
}

export default App