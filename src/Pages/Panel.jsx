import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../styles/PagesStyles/Panel.scss';
import SideLinks from '../components/SideLinks';
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
                <SideLinks img={Discover} text='Discover' />
                <SideLinks img={Songs} text='Songs' />
                <SideLinks img={Albums} text='Albums' />
                <SideLinks img={Artists} text='Artists' />
                <SideLinks img={YouTube} text='YouTube' />
                
                <p className='panel__p'>My Tracks</p>
                <SideLinks img={Favourite} text='Favourite' />
                <SideLinks img={Recent_History} text='Recent History' />
                <SideLinks img={Download_Items} text='Download Items' />
                <SideLinks img={Local_Files} text='Local Files' />

                <div className='PlayList'>
                    <p className='PlayList__p'>Playlist</p>
                    <Link to='/'>
                        <img className='PlayList__img' src={Plus} alt='Agregar' />
                    </Link>
                </div>
                <SideLinks img={Add} text='Bangla' />
                <SideLinks img={Add} text='English' />
                <SideLinks img={Add} text='My Style' />
                <SideLinks img={Add} text='Hindi' />
            </div>
        )
    }
}