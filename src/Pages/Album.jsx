import React from 'react'
import { useParams } from 'react-router-dom';

import Panel from '../components/Panel'
import InfoAlbum from '../components/InfoAlbum'

import '../styles/PagesStyles/Album.scss'

const Album = () => {
    const {myId} = useParams();

    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))
    const album = albumLocalStorage.find(item => item.id === parseInt(myId));

    return(
        <div className='Album__container'>
                <Panel />
                <section className='ContentSection__Album'>
                    <InfoAlbum data={album} key={album.id} NameAlbum='Illisions' Artist='Ibrahim Maalouf' Description='The artists we represent are one of the most successful in Romania and also were a huge breakthrough in the international market, topping radio and sales around the world.' />
                   
                </section>
                
            </div>
    )
}

export default Album;
