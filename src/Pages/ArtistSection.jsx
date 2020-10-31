import React from 'react'
import Panel from '../components/Panel'
import ArtistImage from '../components/ArtistImage'

import '../styles/PagesStyles/ArtistSection.scss'


const ArtistSection = () => {
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return(
        <div className="ArtistSection__container">
            <Panel />
                <section className="ArtistSection">
                    {
                        albumLocalStorage.map((data) => (
                            <ArtistImage data={data} key={data.spt_album_id} {...data}/>
                        ))
                    } 
                </section>
        </div>
    )
}
export default ArtistSection;