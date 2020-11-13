import React from 'react'
import Panel from '../components/Panel'
import ArtistImage from '../components/ArtistImage'
import Playbar from '../components/Playbar'
import MenuBar from '../components/MenuBar'

import '../styles/PagesStyles/ArtistSection.scss'


const ArtistSection = () => {

    // TODO:
    // localStorage is great but is limited for handle the global state I recommend use React Context or Redux
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return(
        <div className="ArtistSection__container">
            <Panel />
                <section className="ArtistSection">
                <MenuBar />
                <div className="ArtisSection__image">
                    {
                        albumLocalStorage.map((data) => (
                            <ArtistImage data={data} key={data.spt_album_id} {...data}/>
                        ))
                    }
                </div>
                </section>
                <Playbar />
        </div>
    )
}
export default ArtistSection;
