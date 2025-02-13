import {  Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { Global } from "../../StyleGlobal";
import Button from '../../components/Button/Button';
import { StyleCart } from './StyleCart';

const Cart = () => {
 const location = useLocation()

 const { data } = location.state || {};
  const [itens,setItens] = useState([])



  return (
    <>
    <Global/>
    
      <Header/>
    <StyleCart>

     <h1>Seu carrinho</h1>
     <p>Selecione a quantidade e finalize o pedido direto no Whatsapp</p>
  
    <div>
      <p >Não tem pratos no carrinho momento</p>
   
    <span>Total: R$ </span>
    <Button color={'#0A741E'}>enviar pedido</Button>
    </div>
    </StyleCart>
    </>
  );
}

export default Cart;
