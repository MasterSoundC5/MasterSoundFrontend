import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentsStyles/SideLinks.scss';

const SideLinks = ({img, text}) => {
    return (
        <Fragment>
        <Link to='/' className='SideLinks'>
            <img src={img} alt={text} />
            <p>{text}</p>
        </Link>
        </Fragment>
    );
}
 
export default SideLinks;