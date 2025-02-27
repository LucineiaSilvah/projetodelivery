import { StyleCart } from "./StyleCart";
import { StyleButtonCart } from "../../components/styles/StyleButtonCart";
import { useNavigate } from "react-router-dom";
const Cart = ({ cart }) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart", {
      state: { cart },
    });
  };
  return (
    <StyleCart>
      <span onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="red"
          stroke="red"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H5"></path>
        </svg>
        :{cart.length}
      </span>

      {cart.length > 0 && (
        <StyleButtonCart>
          <button onClick={handleClick}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H5"></path>
        </svg>
            <p>{cart.length}</p>
          </button>
        </StyleButtonCart>
      )}
    </StyleCart>
  );
};

export default Cart;
