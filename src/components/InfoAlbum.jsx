import React, { Fragment } from 'react';
import ListAlbum from './ListAlbum';
import '../styles/componentsStyles/InfoAlbum.scss';

function InfoAlbum(props) {
        const songsLocalStorage = JSON.parse( localStorage.getItem("songs"))

         // se obtienen solo las canciones del album en cuestion
    const music = songsLocalStorage.filter( (item) => {
        return item.album === props.data.spt_album_id
    })
console.log(music);
    return (
        <Fragment>
            <div className='InfoAlbum'>
                <img className='InfoAlbum__img' src={props.data.cover_image_url} alt='Album Cover' />
                <section className='InfoAlbum__Subtitle'>
                    <p className='InfoAlbum__Subtitle--text'>Album</p>
                    <p className='InfoAlbum__Subtitle--NameAlbum'>{props.data.album_name}</p>
                    <p className='InfoAlbum__Subtitle--Artist'>{props.data.artist_name}</p>
                    <p className='InfoAlbum__Subtitle--Description'>{props.data.name}</p>
                            {
                                music.map( (item) => (
                                    <ListAlbum data={item} key={item.spt_album_id}/>
                                ))
                            }
                </section>
            </div>
        </Fragment>
    );
}
 
export default InfoAlbum;
