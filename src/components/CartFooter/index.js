import './style.scss';
import React, { useEffect, useState } from 'react'

const CartFooter = ({cart}) => {
  const totalCount = cart.reduce((sum, product) => sum + product.count, 0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const sum = cart.reduce((el, product) => el + product.count * product.price, 0);
    setTotalSum(sum);
  }, [cart]);

  return (
    <footer className='cart-footer'>
    <div className="cart-footer__count">{totalCount} од.</div>
    <div className="cart-footer__price">{totalSum} uah</div>
  </footer>
  )
}

export default CartFooter
