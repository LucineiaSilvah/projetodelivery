import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { Global } from '../../StyleGlobal';
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';

const StylePage = styled.section`
  width: 100%;
  background:#232F41;
  font-size: 1.5rem;
  color:#f9f6f6;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    height: auto;
    background: #f7f7f7;
    text-align: center;
    display: flex;
    color: #000;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
padding: 2rem;
  }
  div > div{
    
    width:auto;

   font-size: 16px;
  }
  img{
    width: 50%;
  }

  span {
    align-self: flex-start;
    padding-left: 2rem;
    color: red;
  }
  .total{
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

const sendMessage = (cart) => {
  const phoneNumber = 5541984536057;

  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  // Criando a mensagem formatada
  const cartItems = cart.map(item => `${item.nome} - R$ ${item.preco}`).join("\n");
  const total = cart.reduce((total, item) => total + item.preco, 0);
  
  const message = encodeURIComponent(`Olá! Quero fazer um pedido:\n${cartItems}\n\nTotal: R$ ${total}`);
  
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

const CartPage = () => {
  const location = useLocation(); 
  const cart = location.state?.cart || []; 

  return (
    <>
      <Header />
      <Global />
      <StylePage>
        <h1>Seu carrinho</h1>
        <p>Selecione a quantidade e finalize o pedido direto no Whatsapp</p>

        <div>
          {cart.length === 0 ? (
            <p>Carrinho vazio</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <Card key={index}
                  nome={item.nome}
                  imagem={item.imagem}
                  preco={item.preco}
                />
              ))}
            </div>
            
          )}
         
          
        
        </div>
        <div className='total'>
        <span>Total: R$ {cart.reduce((total, item) => total + item.preco, 0)}</span>
          
          <Button onClick={() => sendMessage(cart)} color={'#0A741E'}>
            Enviar Pedido
          </Button>
        </div>
      </StylePage>
      <Footer />
    </>
  );
};

export default CartPage;
