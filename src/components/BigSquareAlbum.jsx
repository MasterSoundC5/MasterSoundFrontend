import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/BigSquareAlbum.scss'

const BigSquareAlbum = ({ data }) => {
    return(
            <Link to={`/album/${data.spt_album_id}`}>
                <img className='BigSquareAlbum' src={data.cover_image_url} alt="Cover Album"/>
            </Link>
    )
}

export default BigSquareAlbum;
