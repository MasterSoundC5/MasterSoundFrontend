import React from 'react'

import CircleAlbum from '../components/CircleAlbum'
import '../styles/componentsStyles/CircleAlbumGarden.scss'


const CircleAlbumGarden = ({ SectionName }) => {
    // TODO:
    // localStorage is great but is limited for handle the global state I recommend use React Context or Redux
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return(
        <div className="CircleAlbum__garden">
            <section className='NameSection'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection'>
                {
                albumLocalStorage.map((data) => (
                    <CircleAlbum data={data} key={data.id} {...data}/>
                ))
              }
            </section>
        </div>
    )
}

export default CircleAlbumGarden;
