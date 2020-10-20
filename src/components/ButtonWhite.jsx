import React from 'react';

import '../styles/componentsStyles/ButtonWhite.scss';


const ButtonWhite = ({text, onClick}) => {

  return (
    <button 
      className='button-White'
      onClick={onClick}
    >{text}</button>
  )
}

export default ButtonWhite;