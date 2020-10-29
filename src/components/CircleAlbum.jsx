import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/CircleAlbum.scss'


const CircleAlbum = (props) => {
    const { spt_album_id, cover_image_url, album_name, artist_name } = props;

    return(
        <div className="CircleAlbum__container">
            <Link to={`/album/${spt_album_id}`}>
                <img src={cover_image_url} alt='Cover'/>
            </Link>
            <h6>{album_name}</h6>
            <p>{artist_name}</p>
        </div>
    )
}

export default CircleAlbum;