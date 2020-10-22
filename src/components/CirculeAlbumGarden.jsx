import React from 'react'

import CircleAlbum from '../components/CircleAlbum'
import '../styles/componentsStyles/CircleAlbumGarden.scss'


const CircleAlbumGarden = ({ SectionName }) => {

    return(
        <div className="CircleAlbum__garden">
            <section className='NameSection'>
                <h3>{SectionName}</h3>
            </section>
            <CircleAlbum AlbumName='Rolling Stonte'/>
            <CircleAlbum AlbumName='Rolling Stonte'/>
            <CircleAlbum AlbumName='Rolling Stonte'/>
            <CircleAlbum AlbumName='Rolling Stonte'/>
            <CircleAlbum AlbumName='Rolling Stonte'/>
            <CircleAlbum AlbumName='Rolling Stonte'/>
        </div>
    )
}

export default CircleAlbumGarden;
