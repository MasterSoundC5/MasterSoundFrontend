import React, { Component }  from 'react';
import Panel from '../Pages/Panel';
import Logo from '../Assets/Icons/logo.svg';
import '../styles/PagesStyles/Home.scss';

export default class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Panel />
                <img src={Logo} alt='logo' />
            </div>
        )
    }
}