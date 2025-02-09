import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Cart from "./pages/Cart/Cart";
const Router = () => {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
