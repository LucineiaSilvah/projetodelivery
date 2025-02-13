import Button from "../Button/Button";
import { StyleButton } from "../styles/StyleButton";
import { StyleButtonCart } from "../styles/StyleButtonCart";
import { StyleWhats } from "../styles/StyleWhatsapp";
import { useNavigate } from "react-router-dom";
const Whats = (props) => {

  const navigate = useNavigate();

  const handleCart = ()=>{
    navigate('/cart')
  }
  return (

    <StyleWhats>
    <Button color={"#0C7D21"}>fale agora no whatsapp</Button>
    
   
    </StyleWhats>
 
  );
}

export default Whats;
