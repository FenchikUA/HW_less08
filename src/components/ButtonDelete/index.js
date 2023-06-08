import React from 'react'

const ButtonDelete = ({deleteProduct, id}) => {
  return (
    <div className="product__controls">
      <button type='button' onClick={() => {deleteProduct(id)}}><img src="./img/icons/cross.svg" alt="" /></button>
    </div>
  )
}

export default ButtonDelete
