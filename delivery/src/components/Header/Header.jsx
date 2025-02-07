import NavBar from "../NavBar/NavBar";
import { StyleHeader } from "../styles/StyleHeader";
import { StyleTitle } from "../styles/StyleTitle";
import logo from '../../../public/Logo-Ninja-Food.svg'

const Header = () => {
  return (
   <>
<StyleHeader>
  <StyleTitle>
    <img src={logo} width={'200px'} alt="logo pizza ninja" />
  </StyleTitle>
  <NavBar/>
</StyleHeader>

   </>
  );
}

export default Header;
