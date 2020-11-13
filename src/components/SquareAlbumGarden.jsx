import React from 'react'

import SquareAlbum from '../components/SquareAlbum'

import '../styles/componentsStyles/SquareAlbumGarden.scss'


const SquareAlbumGarden = ({ SectionName }) => {

    // TODO:
    // localStorage is great but is limited for handle the global state I recommend use React Context or Redux
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return(
        <div className="SquareAlbum__garden">
            <section className='NameSection__Square'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection__Square'>
                {
                albumLocalStorage.map((data) => (
                    <SquareAlbum data={data} key={data.spt_album_id} {...data}/>
                    ))
                }

            </section>
        </div>
    )
}

export default SquareAlbumGarden;
