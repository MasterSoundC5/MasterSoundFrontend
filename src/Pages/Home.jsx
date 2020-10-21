import React, { Component }  from 'react';
import Logo from '../Assets/Icons/logo.svg';
import '../styles/PagesStyles/Home.scss';

export default class Home extends Component {
    render() {
        return(
            <div className='home'>
                <img src={Logo} alt='logo' />
            </div>
        )
    }
}