import React, { Component }  from 'react';

import Panel from '../Pages/Panel';
import '../styles/PagesStyles/Home.scss';
import CircleAlbumGarden from '../components/CirculeAlbumGarden';
import InfoAlbum from '../components/InfoAlbum';
import AlbumArtist from '../Assets/AlbumArtist.PNG';
import PurpleButtonGarden from '../components/PurpleButtonGarden'


export default class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Panel />
                <section>
                    <CircleAlbumGarden SectionName='Section Name'/>
                    <PurpleButtonGarden />
                    <InfoAlbum imgAlbum={AlbumArtist} NameAlbum='Illisions' Artist='Ibrahim Maalouf' Description='The artists we represent are one of the most successful in Romania and also were a huge breakthrough in the international market, topping radio and sales around the world.' />
                </section>
            </div>
        )
    }
}