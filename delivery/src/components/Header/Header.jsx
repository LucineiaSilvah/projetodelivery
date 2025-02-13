import NavBar from "../NavBar/NavBar";
import { StyleHeader } from "../styles/StyleHeader";
import { StyleTitle } from "../styles/StyleTitle";
import logo from '../../../public/Logo-Ninja-Food.svg'
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate()

  const handleBackToHome = ()=>{
    navigate('/')
  }
  return (
   <>
<StyleHeader>
  <StyleTitle>
    <img src={logo} width={'200px'} alt="logo pizza ninja" onClick={handleBackToHome} />
  </StyleTitle>
  <NavBar/>
</StyleHeader>

   </>
  );
}

export default Header;
