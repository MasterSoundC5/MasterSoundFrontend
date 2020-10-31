import React, { useEffect }  from 'react';

import Panel from '../components/Panel';
import '../styles/PagesStyles/Home.scss';
import CircleAlbumGarden from '../components/CirculeAlbumGarden';
import TopTracks from '../components/TopTracks';
import PurpleButtonGarden from '../components/PurpleButtonGarden'
import SquareAlbumGarden from '../components/SquareAlbumGarden'
import RectangleAlbumGarden from '../components/RectangleAlbumGarden';

import { useFetchAlbum } from '../hooks/useFetchAlbum';
import Playbar from '../components/Playbar';

const Home = () => {
    //-----------------FETCH Albums (call toAPI)------------------------------//
    const albumList = useFetchAlbum('https://mastersound-backend.azurewebsites.net/api/albums/new-releases')       
     
    //-----------------storing the album in the local storage----------------------//
           localStorage.setItem( "albums", JSON.stringify( albumList ))

    useEffect(() => {
        window.scroll(0, 0)
      }, []);
      
        return(
            <div className='Home__container'>
                    <Panel />
                    <section className='Content__section'>
                        <CircleAlbumGarden SectionName='Section Name'/>
                        <SquareAlbumGarden SectionName='Tendencia'/>
                        <PurpleButtonGarden />
                        <RectangleAlbumGarden SectionName='Tendencia'/>
                        <TopTracks />
                    </section>
                    <Playbar />                    
                </div>
        )
}
export default Home;