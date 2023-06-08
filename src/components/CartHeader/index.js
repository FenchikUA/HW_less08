import './style.scss';
import React from 'react'

const CardHeader = () => {
  return (
    <header className='cart-header'>
      <div className="cart-header__title">Назва</div>
      <div className="cart-header-count">Кількість</div>
      <div className="cart-header-cost">Вартість</div>
    </header>
  )
}

export default CardHeader
