import Button from "../Button/Button";
import { StyleButton } from "../styles/StyleButton";
import { StyleButtonCart } from "../styles/StyleButtonCart";
import { StyleWhats } from "../styles/StyleWhatsapp";
import { useNavigate } from "react-router-dom";
const Whats = (props) => {

  const navigate = useNavigate();
const phoneNumber = "5541984536057"
  const handleCart = ()=>{
    navigate('/cart')
  }
  return (

    <StyleWhats>
    <Button color={"#0C7D21"}>
      <a href={`https://wa.me/${phoneNumber}?text=Olá, gostaria de fazer um pedido direto!`} target="_blank" rel="noopener noreferrer">fale agora no whatsapp</a>
      </Button>
    
   
    </StyleWhats>
 
  );
}

export default Whats;
