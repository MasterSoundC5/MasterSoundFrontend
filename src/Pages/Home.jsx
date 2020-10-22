import React, { Component }  from 'react';
import Panel from '../Pages/Panel';
import '../styles/PagesStyles/Home.scss';
import CircleAlbum from '../components/CircleAlbum'

export default class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Panel />
                <CircleAlbum AlbumName='Rolling Stonte'/>
            </div>
        )
    }
}