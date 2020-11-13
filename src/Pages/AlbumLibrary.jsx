import React from 'react'

import Panel from '../components/Panel'
import BigSquareAlbum from '../components/BigSquareAlbum'
import Playbar from '../components/Playbar'
import MenuBar from '../components/MenuBar'

import '../styles/PagesStyles/AlbumLibrary.scss'

const AlbumLibrary = () => {
    // TODO:
    // localStorage is great but is limited for handle the global state I recommend use React Context or Redux
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return (
        <div className="AlbumLibrary__container">
            <Panel />
                <section className="AlbumLibrary__section">
                    <MenuBar />
                    <div className="AlbumSection__image">
                        {
                            albumLocalStorage.map((data) => (
                                <BigSquareAlbum data={data} key={data.spt_album_id} {...data}/>
                            ))
                        }
                    </div>
                </section>
                <Playbar />
        </div>
        );
    }

export default AlbumLibrary;


