import './style.scss';
import Count from '../Count';
import ButtonDelete from '../ButtonDelete';
import React from 'react'

const Product = ({product, deleteProduct, plus, minus}) => {
  const {img,title,price,id,count} = product;
  return (
    <div>
      <section className='product'>
        <div className="product__img"><img src={`./img/products/${img}`} alt={title} /></div>
        <div className="product__title">{title}</div>
        <Count count={count} plus={plus} minus={minus} id={id}/>
        <div className="product__price">{price * count} uah</div>
       <ButtonDelete deleteProduct={deleteProduct} id={id}/>
      </section>
    </div>
  )
}

export default Product
