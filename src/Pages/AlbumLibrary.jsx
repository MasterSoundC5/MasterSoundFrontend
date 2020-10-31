import React from 'react';

import Panel from '../components/Panel'
import BigSquareAlbum from '../components/BigSquareAlbum'
import Playbar from '../components/Playbar';

import '../styles/PagesStyles/AlbumLibrary.scss'

const AlbumLibrary = () => {
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return (
        <div className="AlbumLibrary__container">
            <Panel />
                <section className="AlbumLibrary__section">
                    {
                        albumLocalStorage.map((data) => (
                            <BigSquareAlbum data={data} key={data.spt_album_id} {...data}/>
                        ))
                    } 
                </section>
                <Playbar />
        </div>
        );
    }
     
export default AlbumLibrary;
        
       
