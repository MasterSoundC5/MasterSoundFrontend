import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentsStyles/SideLinks.scss';

const SideLinks = ({icon, text}) => {
    return (
        <Fragment>
        <Link to='/' className='enlacesLaterales'>
             {icon}
            <p>{text}</p>
        </Link>
        </Fragment>
    );
}
 
export default SideLinks;