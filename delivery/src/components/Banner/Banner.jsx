import React from 'react';
import { StyleTitle } from '../styles/StyleTitle';
import { StyleBanner } from '../styles/StyleBanner';
import star from '../../assets/stars.svg'

import { StyleCenter } from '../styles/StyleCenter';
import Button from '../Button/Button';
import mockup from '../../assets/mockup-mobile.webp'
import { StyleAnimation } from '../styles/StyleAnimation';
import AnimatedText from './AnimationText';
const Banner = () => {
  return (

      <StyleBanner>
        <h2>
          Peça online
        </h2>
      <StyleTitle>A melhor Pizza da<br/> Cidade Na Sua Porta!</StyleTitle>
       <h2>Pedido Facil, Entrega Rápida, Sabor Incomparavel</h2>
       <div>
        <span>Ingredientes Frescos e de Qualidade</span><span>Forno à Lenha</span><span>Entrega Ráspanida e Eficiente</span>
       </div>
   
            
        <StyleCenter>
     <Button color={"#B11621"}>Peca agora e experimente</Button>
      <img className='star' src={star} alt="" />
      
       <span>5 estrelas no ifood</span>

       <img style={{width:'80%'}} src={mockup} alt="" />

    
       <AnimatedText/>
        </StyleCenter>
 
      </StyleBanner>
 
  );
}

export default Banner;
