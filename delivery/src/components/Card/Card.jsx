import { StyleCard } from "../styles/StyleCard";

const Card = ({id,nome,imagem,descricao,tamanho,preco}) => {
  return (
    <>
      <StyleCard >
        
        <div className="box">
        <h4>{nome}</h4>
         <p>{descricao}</p>
         <p>
         <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="25" 
    height="25" 
    fill="red">
    <path d="M12 2a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm0 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 2c-4.42 0-8 2.07-8 4.63V20a1 1 0 0 0 2 0v-3.37C6 15.32 8.69 14 12 14s6 1.32 6 2.63V20a1 1 0 0 0 2 0v-3.37C20 12.07 16.42 10 12 10z"/>
</svg>
{tamanho}</p>
         <hr />
        <span> <p className="price">R$ {preco}</p> <p className="mais"><svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="48" 
    height="48" 
    fill="white">
    <path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V6a1 1 0 0 1 1-1z"/>
</svg>
</p></span>
        </div>
         <img src={imagem} alt={descricao} />

      </StyleCard>
    </>
  );
}

export default Card;
