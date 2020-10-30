import React, { Fragment }  from 'react';
import '../styles/componentsStyles/Playbar.scss';

const Playbar = ({ name, artist, album, image }) => {  
    return(
        <Fragment>
            <div className="playbar">
                <div class="playbar__song">
                    <img class="song__image" src={image} alt="" />
                    <div class="song__data">
                        <p class="song__title">{name}</p>
                        <p class="song__text">{artist}</p>
                        <p class="song__text">{album}</p>
                    </div>
                </div>
                <div class="playbar__elements">
                </div>
                <div className="playbar__right">                    
                </div>
            </div>
        </Fragment>
    )
};

export default Playbar;
