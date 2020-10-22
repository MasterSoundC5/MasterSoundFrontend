import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../styles/PagesStyles/Panel.scss';
import EnlacesLaterales from '../components/EnlacesLaterales';
import Logo from '../Assets/Icons/logo.svg';

import Discover from '../Assets/Icons/Discover.svg';
import Songs from '../Assets/Icons/Songs.svg';
import Albums from '../Assets/Icons/Albums.svg';
import Artists from '../Assets/Icons/Artists.svg';
import YouTube from '../Assets/Icons/YouTube.svg';
import Favourite from '../Assets/Icons/Favourite.svg';
import Recent_History from '../Assets/Icons/Recent History.svg';
import Download_Items from '../Assets/Icons/Download Items.svg';
import Local_Files from '../Assets/Icons/Local Files.svg';
import Add from '../Assets/Icons/Add.svg';
import Plus from '../Assets/Icons/Plus.svg';

export default class Panel extends Component {
    render() {
        return(
            <div className='panel'>
                <img className='panel__logo' src={Logo} alt='Logo' />
                <EnlacesLaterales img={Discover} text='Discover' />
                <EnlacesLaterales img={Songs} text='Songs' />
                <EnlacesLaterales img={Albums} text='Albums' />
                <EnlacesLaterales img={Artists} text='Artists' />
                <EnlacesLaterales img={YouTube} text='YouTube' />
                
                <p className='panel__p'>My Tracks</p>
                <EnlacesLaterales img={Favourite} text='Favourite' />
                <EnlacesLaterales img={Recent_History} text='Recent History' />
                <EnlacesLaterales img={Download_Items} text='Download Items' />
                <EnlacesLaterales img={Local_Files} text='Local Files' />

                <div className='PlayList'>
                    <p className='PlayList__p'>Playlist</p>
                    <Link to='/'>
                        <img className='PlayList__img' src={Plus} alt='Agregar' />
                    </Link>
                </div>
                <EnlacesLaterales img={Add} text='Bangla' />
                <EnlacesLaterales img={Add} text='English' />
                <EnlacesLaterales img={Add} text='My Style' />
                <EnlacesLaterales img={Add} text='Hindi' />
            </div>
        )
    }
}