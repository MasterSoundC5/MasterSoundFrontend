import React, { useEffect }  from 'react'
import { useFetchAlbum } from '../hooks/useFetchAlbum'

import Panel from '../components/Panel'
import '../styles/PagesStyles/Home.scss'
import CircleAlbumGarden from '../components/CirculeAlbumGarden'
import TopTracks from '../components/TopTracks'
import PurpleButtonGarden from '../components/PurpleButtonGarden'
import SquareAlbumGarden from '../components/SquareAlbumGarden'
import RectangleAlbumGarden from '../components/RectangleAlbumGarden'
import Playbar from '../components/Playbar'
import MenuBar from '../components/MenuBar'


const Home = () => {
    //-----------------FETCH Albums (call toAPI)------------------------------//
    // TODO:
    // The API URL should be a global variable
    const albumList = useFetchAlbum('https://mastersound-backend.azurewebsites.net/api/albums/new-releases')

    //-----------------storing the album in the local storage----------------------//
    // TODO:
    // localStorage is great but is limited for handle the global state I recommend use React Context or Redux
    localStorage.setItem( "albums", JSON.stringify( albumList ))

    useEffect(() => {
        window.scroll(0, 0)
      }, []);

        return(
            <div className='Home__container'>
                    <Panel />
                    <section className='Content__section'>
                        <MenuBar />
                        <CircleAlbumGarden SectionName='Tendencias'/>
                        <SquareAlbumGarden SectionName='Recomendaciones'/>
                        <PurpleButtonGarden />
                        <RectangleAlbumGarden SectionName='Escuchado recientemente'/>
                        <TopTracks />
                    </section>
                    <Playbar />
                </div>
        )
}
export default Home;