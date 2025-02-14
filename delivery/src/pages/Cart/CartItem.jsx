import React from 'react';
import Card from '../../components/Card/Card';

const CartItem = ({item, onRemove, onUpdateQtd}) => {
  return (
    <div>
    {item}
    </div>
  );
}

export default CartItem;
