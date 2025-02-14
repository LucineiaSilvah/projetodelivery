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
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    height: 70vh;
    background: #f7f7f7;
    text-align: center;
    display: flex;
    color: #000;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  div > div{
    width: 80%;
    height: auto;
  }
  img{
    width: 50%;
  }

  span {
    align-self: flex-start;
    padding-left: 2rem;
    color: red;
  }
`;

const CartPage = () => {
  const location = useLocation(); // ✅ Agora o hook está dentro do componente
  const cart = location.state?.cart || []; // ✅ Garante que `cart` nunca seja undefined

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
                >
                  
                </Card>
              ))}
            </div>
          )}
          <span>Total: R$ {cart.reduce((total, item) => total + item.preco, 0)}</span>
          <Button color={'#0A741E'}>Enviar Pedido</Button>
        </div>
      </StylePage>
      <Footer />
    </>
  );
};

export default CartPage;
