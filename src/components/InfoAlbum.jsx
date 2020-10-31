import React, { Fragment } from 'react';
import ListAlbum from './ListAlbum';
import '../styles/componentsStyles/InfoAlbum.scss';


function InfoAlbum({ data }) {

    const nameArtists = data.artists.map((data) => {
        return data.artist_name;
    })
//----------------------getting songs from local storage-----------------------//
    const musicLocalstorage = JSON.parse( localStorage.getItem("SongsList"))

    return (
        <Fragment>
            <div className='InfoAlbum'>
                <img className='InfoAlbumimg' src={data.cover_image_url} alt='Album Cover' />
                <section className='InfoAlbumSubtitle'>
                    <p className='InfoAlbumSubtitle--text'>Album</p>
                    <p className='InfoAlbumSubtitle--NameAlbum'>{data.album_name}</p>
                    <p className='InfoAlbumSubtitle--Artist'>{nameArtists}</p>
                    <p className='InfoAlbumSubtitle--Description'>{data.name}</p>
                        {
                            musicLocalstorage.map( (item) => (
                                <ListAlbum data={item} {...item}/>
                            ))
                        }
                </section>
            </div>
        </Fragment>
    );
}
 
export default InfoAlbum;