import React from 'react';

import Panel from '../components/Panel'
import BigSquareAlbum from '../components/BigSquareAlbum'
import '../styles/PagesStyles/AlbumLibrary.scss'

const AlbumLibrary = () => {
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return (
        <div>
            <div className="AlbumLibrary__container">
                <Panel />
                <section className="AlbumLibrary__section">
                    {
                        albumLocalStorage.map((data) => (
                            <BigSquareAlbum data={data} key={data.spt_album_id} {...data}/>
                        ))
                    } 
                </section>
            </div>
        </div>
    );
}
 
export default AlbumLibrary;
