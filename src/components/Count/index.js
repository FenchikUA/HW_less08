import './style.scss';
import React from 'react'

const Count = ({count, plus, id, minus}) => {
  return (
    <div className="count">
      <div className="count__box">
        <input type="number" className='count__input' min='1' max='100' value={count}/>
      </div>
      <div className="count__controls">
        <button type='button' className='count_up' onClick={() => {plus(id)}}><img src="./img/icons/icon-up.svg" alt="" /></button>
        <button type='button' className='count_down' onClick={() => {minus(id)}}><img src="./img/icons/icon-down.svg" alt="" /></button>
      </div>
    </div>
  )
}

export default Count
