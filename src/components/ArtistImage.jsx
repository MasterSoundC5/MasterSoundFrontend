import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/ArtistImage.scss'

const ArtistImage = ({ data }) => {
    // TODO:
    // nameArtists is a array but in the HTML show as string
    const nameArtists = data.artists.map((data) => {
        return data.artist_name;
    })

    // TODO:
    // ArtistPortrait is a array but in the HTML show as string
    const ArtistPortrait = data.artists.map((data) => {
        return data.cover_image_url;
    })

    return(
        <Link to={`/album/${data.spt_album_id}`}>
            <div className='ImageArtist__container'>
                <div className='ImageArtist__element'>
                    <img src={ArtistPortrait} alt="Cover Album"/>
                        <div className='ImageArtist__information'>
                            <p>{nameArtists}</p>
                        </div>
                    </div>
                </div>
         </Link>
    )
}

export default ArtistImage;
