import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/CircleAlbum.scss'


const CircleAlbum = (props) => {
    const { id, img_url, category } = props;

    return(
        <div className="CircleAlbum__container">
            <Link to={`/album/${id}`}>
                <img src={img_url} alt='Cover'/>
            </Link>
            <h6>{category}</h6>
            <p>{category}</p>
        </div>
    )
}

export default CircleAlbum;