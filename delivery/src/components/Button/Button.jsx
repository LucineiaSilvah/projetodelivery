import React from 'react';
import { StyleButton } from '../styles/StyleButton';

const Button = ({children,color,onClick}) => {
  return (

    <StyleButton onClick={onClick} color={color}>{children}</StyleButton>

  
 
  );
}

export default Button;
