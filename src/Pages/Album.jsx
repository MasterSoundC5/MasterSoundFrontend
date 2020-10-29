import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useFetchmusic } from '../hooks/useFetchmusic';

import Panel from '../components/Panel'
import InfoAlbum from '../components/InfoAlbum'

import '../styles/PagesStyles/Album.scss'

const Album = () => {
    const {myId} = useParams();

    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))
    const album = albumLocalStorage.find(item => item.spt_album_id === myId);
    
           //FETCH songs(call to API)
    const songs = useFetchmusic(myId)
    
    console.log(songs)
    return(
        <div className='Album__container'>
                <Panel />
                <section className='ContentSection__Album'>
                <InfoAlbum data={album} />
                </section>
                
            </div>
    )
}

export default Album;
