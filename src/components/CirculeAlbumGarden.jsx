import React from 'react'

import CircleAlbum from '../components/CircleAlbum'
import '../styles/componentsStyles/CircleAlbumGarden.scss'


const CircleAlbumGarden = ({ SectionName }) => {

    return(
        <div className="CircleAlbum__garden">
            <section className='NameSection'>
                <h3>{SectionName}</h3>
            </section>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
                <CircleAlbum AlbumName='Rolling Stones'/>
        </div>
    )
}

export default CircleAlbumGarden;
