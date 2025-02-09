import React from 'react';
import { StyleButton } from '../styles/StyleButton';

const Button = ({children,color}) => {
  return (

    <StyleButton color={color}>{children}</StyleButton>

  
 
  );
}

export default Button;
