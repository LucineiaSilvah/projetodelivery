import { StyleNav } from "../styles/StyleNav";

const NavBar = () => {
  return (
    <>
      <StyleNav>
        <ul>
          <li>
            <a href="#">Destaques</a>
          </li>
          <li>
            <a href="#">Pizzas</a>
          </li>
          <li>
            <a href="#">Brotos</a>
          </li>
          <li>
            <a href="#">Bebidas</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <div>
          <input type="search" name="busca" id="busca" placeholder="Pesquisar prato" /> <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
    <path d="M10 2a8 8 0 0 1 5.29 13.71l4.83 4.83-1.41 1.41-4.83-4.83A8 8 0 1 1 10 2m0 2a6 6 0 1 0 4.24 10.24A6 6 0 0 0 10 4"/>
</svg>
</button>
        </div>
       
      <div>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="21" r="1"></circle>
  <circle cx="20" cy="21" r="1"></circle>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H5"></path>
  
</svg>
:0
        </span>
     
      </div>
      </StyleNav>
    </>
  );
};

export default NavBar;
