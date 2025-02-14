import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';

import CartPage from "./pages/Cart/CartPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const Router = () => {
  return (
    <>
       
      <BrowserRouter >
        <Header/>
         
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Router;
