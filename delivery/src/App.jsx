import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";





function App() {

  return (
    <>
 <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>

   
  </Routes>
 </Router>

    </>
  )
}

export default App
