import React, { useEffect }  from 'react';

import Panel from '../components/Panel';
import '../styles/PagesStyles/Home.scss';
import CircleAlbumGarden from '../components/CirculeAlbumGarden';
import TopTracks from '../components/TopTracks';
import PurpleButtonGarden from '../components/PurpleButtonGarden'
import SquareAlbumGarden from '../components/SquareAlbumGarden'
import RectangleAlbumGarden from '../components/RectangleAlbumGarden';
import { useFetchAlbum } from '../hooks/useFetchAlbum'


const Home = () => {
    useEffect(() => {
        window.scroll(0, 0)//esta linea sirve para que cuando se renderice la pagina envíe al usuario hasta arriba de la pagina
      }, []);
      
    
      //FETCH DE LAS RECETAS (usando llamadas a la API)
      const [albumList] = useFetchAlbum('https://apidjango.azurewebsites.net/api/Recipe-list/')
    
      //FETCH DE LOS INGREDIENTES (usando llamadas a la API)
      //const [ingredientsList] = useFetchIngredients('https://apidjango.azurewebsites.net/api/ingredients-list/')
      
    
      // __________________LOCAL STORAGE_____________________
      // se guarda la llamada de las recetas en el local storage para usarse en toda la app
      localStorage.setItem( "albums", JSON.stringify( albumList ))
    
      // se guarda la llamada de los ingredientes en el local storage para usarse en la app
      //localStorage.setItem ( "ingredients", JSON.stringify ( ingredientsList ))
    
      // se obtenien las recetas del local storage y se almacenan en una variable
    //  const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))
      
      // se obtenien los ingredientes del local storage y se almacenan en una variable
     // const ingredientsLocalStorage = JSON.parse( localStorage.getItem("ingredients"))


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