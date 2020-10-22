import React from 'react'

import Cover from '../Assets/RollingCover.jpeg'
import '../styles/componentsStyles/CircleAlbum.scss'


const CircleAlbum = ({AlbumName}) => {

    return(
        <div className="CircleAlbum__container">
            <img src={Cover} alt='Cover'/>
            <p>{AlbumName}</p>
        </div>
    )
}

export default CircleAlbum;