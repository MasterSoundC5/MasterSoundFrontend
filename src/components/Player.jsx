import React from 'react'

import '../styles/componentsStyles/Player.scss'

const Player = ({ data }) => {
    
    const nameArtists = data.artists.map((data) => {
        return data.artist_name;
    })

    return(
        <section className='Player__container'>
            <div className='PlayerAlbum__info'>
                <img className='PlayerAlbum__cover' src={data.cover_image_url} alt='Album Cover' />
                    <div className='PlayerAlbum__TextSection'>
                        <p className='PlayerAlbum__ArtistName'>{nameArtists}</p>
                        <p className='PlayerAlbum__AlbumName'>{data.album_name}</p>
                    </div>
            </div>
            <audio className="Player__Style" controls>
                <source src="https://p.scdn.co/mp3-preview/9a19a5cf5a03b4b67708275560965f9162913e10?cid=aba92b636b61480c992f35aa022405f7" type="audio/ogg" />
            </audio>
        </section>
    )
}

export default Player;