import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/SquareAlbum.scss'


const SquareAlbum = (props) => {
    const { id, img_url, category } = props;
    
    return (
      <div className='SquareAlbum__container'>
        <Link to={`/album/${id}`}>
          <img src={img_url} alt="Cover Album"/>
        </Link>
          <p>{category}</p>
          <span>{category}</span>
        </div>
  )
}

export default SquareAlbum;