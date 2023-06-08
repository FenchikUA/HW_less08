import CartHeader from '../CartHeader';
import Product from '../Product';
import CartFooter from '../CartFooter';
import data from '../../data';
import React, {useState} from 'react'


const Cart = () => {
const [cart,setCart] = useState(data);
const deleteProduct = (id) => {
  setCart((cart) => {
    return cart.filter((product) => {return id !== product.id})
  })
}

const minus = (id) => {
  setCart((cart) => {
    return cart.map((product) => {
      if (product.id === id) {
        if (product.count < 2) {
          deleteProduct(id);
          return product;
        } else {
          return {
            ...product,
            count: product.count - 1
          };
        }
      }
      return product;
    });
  });
};

const plus = (id) => {
  setCart((cart) => {
    return cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1 
        }
      }
      return product
    })
  })
}

const products = cart.map((product) => {
  return <Product product={product} key={product.id} deleteProduct={deleteProduct} plus={plus} minus={minus}/>
})

  return (
    <section className='cart'>
      <CartHeader />
      {products}
      <CartFooter cart={cart}/>
    </section>
  )
}

export default Cart
