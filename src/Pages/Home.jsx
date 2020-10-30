import React, { Fragment, useEffect }  from 'react';

import Panel from '../components/Panel';
import Playbar from '../components/Playbar';

import '../styles/PagesStyles/Home.scss';
import '../styles/PagesStyles/MusicPlayer.scss';
import '../styles/componentsStyles/Playbar.scss';
import Image from '../Assets/RollingCover.jpeg';

import CircleAlbumGarden from '../components/CirculeAlbumGarden';
import TopTracks from '../components/TopTracks';
import PurpleButtonGarden from '../components/PurpleButtonGarden'
import SquareAlbumGarden from '../components/SquareAlbumGarden'
import RectangleAlbumGarden from '../components/RectangleAlbumGarden';


const Home = () => {
    useEffect(() => {
        window.scroll(0, 0)
      }, []);
      
        return(
            <Fragment>
                <div className='music_player'>
                    <Panel />
                    <div className='content'>
                        <CircleAlbumGarden SectionName='Section Name'/>
                        <SquareAlbumGarden SectionName='Tendencia'/>
                        <PurpleButtonGarden />
                        <RectangleAlbumGarden SectionName='Tendencia'/>
                        <TopTracks />
                    </div> 
                    <Playbar name='Arabella' artist='Artic Monkeys' album='AM' image={Image} />                 
                </div>
            </Fragment>
        )
}
export default Home;