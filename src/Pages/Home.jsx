import React, { Component }  from 'react';

import Panel from '../Pages/Panel';
import '../styles/PagesStyles/Home.scss';
import CircleAlbumGarden from '../components/CirculeAlbumGarden'

export default class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Panel />
                <CircleAlbumGarden SectionName='Section Name'/>
            </div>
        )
    }
}