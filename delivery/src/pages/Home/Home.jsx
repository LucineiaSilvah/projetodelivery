import  { useState } from "react";
import { Global } from "../../StyleGlobal";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Highlight from "../../components/Highlight/Highlight";
import Sabores from "../../components/Sabores/Sabores";
import Whats from "../../components/Whats/Whats";
import Footer from "../../components/Footer/Footer";

import { StyleHome } from "./StyleHome";
import Cart from "../Cart/Cart";

const Home = () => {
const [ cart,setCart] = useState([])

const addToCart = (p)=>{

  
setCart([...cart,p])

}
  
  return (
    <StyleHome>
      <Global />
      <Header />
      <Banner />
     
      <Sabores addToCart={addToCart} />
      <Cart cart={cart}/>
      <Whats />
      <Footer />
    </StyleHome>
  );
};

export default Home;
