import { StyleCart } from './StyleCart';
import { StyleButtonCart } from "../../components/styles/StyleButtonCart";
import { useNavigate } from 'react-router-dom';
const Cart = ({ cart }) => {

  const navigate = useNavigate()
  const handleClick = () =>{
    navigate("/cart",{
      state: { cart}
    })
  }
  return (
    <StyleCart>
      <h1>Seu Carrinho</h1>

      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <p key={index}>
              {item.nome}: R$ {item.preco}
            </p>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <StyleButtonCart>
          <button onClick={handleClick}> {cart.length}</button>
        </StyleButtonCart>
      )}
    </StyleCart>
  );
}

export default Cart;
