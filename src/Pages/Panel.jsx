import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../styles/PagesStyles/Panel.scss';
import EnlacesLaterales from '../components/EnlacesLaterales';
import Logo from '../Assets/Icons/logo.svg';
import ButtonIcon from '../components/ButtonIcon';

import Plus from '../Assets/Icons/Plus.svg';

//********  Icons  **********//
import { AddIcon, DiscoverIcon, SongsIcon,
        AlbumsIcon, ArtistsIcon, YoutubeIcon,
        FavouriteIcon, RecentHistoryIcon,
        LocalfilesIcon, DownloadItemsIcon } 
from '../components/Icons';

export default class Panel extends Component {
    render() {
        return(
            <div className='panel'>
                <img className='panel__logo' src={Logo} alt='Logo' />
                <EnlacesLaterales icon={<DiscoverIcon />} text='Discover' />
                <EnlacesLaterales icon={<SongsIcon />} text='Songs' />
                <EnlacesLaterales icon={<AlbumsIcon />} text='Albums' />
                <EnlacesLaterales icon={<ArtistsIcon />} text='Artists' />
                <EnlacesLaterales icon={<YoutubeIcon />} text='YouTube' />
                
                <p className='panel__p'>My Tracks</p>
                <EnlacesLaterales icon={<FavouriteIcon />} text='Favourite' />
                <EnlacesLaterales icon={<RecentHistoryIcon />} text='Recent History' />
                <EnlacesLaterales icon={<DownloadItemsIcon />} text='Download Items' />
                <EnlacesLaterales icon={<LocalfilesIcon />} text='Local Files' />

                <div className='PlayList'>
                    <p className='PlayList__p'>Playlist</p>
                    <Link to='/'>
                        <img className='PlayList__img' src={Plus} alt='Agregar' />
                    </Link>
                </div>
                <EnlacesLaterales icon={<AddIcon />} text='Bangla' />
                <EnlacesLaterales icon={<AddIcon />} text='English' />
                <EnlacesLaterales icon={<AddIcon />} text='My Style' />
                <EnlacesLaterales icon={<AddIcon />} text='Hindi' />
            </div>
        )
    }
}