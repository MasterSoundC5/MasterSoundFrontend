import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/RectangleAlbum.scss'

const RectangleAlbum = (props) => {
    const { id, img_url, category } = props;
    return(
        <Link to={`/album/${id}`}>
            <div className='RectangleCover'>
                <img src={img_url} alt='cover' />
                <div className="AlbumDetails">
                    <div className='AlbumDetails__information'>
                        <h3>{category}</h3>
                        <p>{category}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RectangleAlbum;