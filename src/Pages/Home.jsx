import React, { useEffect }  from 'react';

import Panel from '../components/Panel';
import '../styles/PagesStyles/Home.scss';
import CircleAlbumGarden from '../components/CirculeAlbumGarden';
import TopTracks from '../components/TopTracks';
import PurpleButtonGarden from '../components/PurpleButtonGarden'
import SquareAlbumGarden from '../components/SquareAlbumGarden'
import RectangleAlbumGarden from '../components/RectangleAlbumGarden';
import { useFetchAlbum } from '../hooks/useFetchAlbum';
import { useFetchmusic } from '../hooks/useFetchmusic';


const Home = () => {
    useEffect(() => {
        window.scroll(0, 0)
      }, []);
      
    
      //FETCH Albums (call toAPI)
      const [albumList] = useFetchAlbum('https://apidjango.azurewebsites.net/api/Recipe-list/')
    
      //FETCH songs(call to API)
      const [music] = useFetchmusic('https://apidjango.azurewebsites.net/api/ingredients-list/')
      
    
      // __________________LOCAL STORAGE_____________________
      // se guarda la llamada de los albums
      localStorage.setItem( "albums", JSON.stringify( albumList ))
    
      // se guarda la llamada de las canciones
      localStorage.setItem ( "songs", JSON.stringify ( music ))
    
      // se obtenien los albums del local storage y se almacenan en una variable
      //const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))
      
      // se obtenien las canciones del local storage y se almacenan en una variable
      //const songsLocalStorage = JSON.parse( localStorage.getItem("songs"))


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
                    
                </div>
        )
}
export default Home;