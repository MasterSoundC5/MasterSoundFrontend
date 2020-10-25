import React from 'react'

import SquareAlbum from '../components/SquareAlbum'
import '../styles/componentsStyles/SquareAlbumGarden.scss'


const SquareAlbumGarden = ({ SectionName }) => {

    return(
        <div className="SquareAlbum__garden">
            <section className='NameSection__Square'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection__Square'>
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
                <SquareAlbum album='Test' artist='Fulanito perez' />
            </section>
        </div>
    )
}

export default SquareAlbumGarden;
