import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/componentsStyles/EnlacesLaterales.scss';

const EnlacesLaterales = ({img, text}) => {
    return (
        <Fragment>
        <Link to='/' className='enlacesLaterales'>
            <img src={img} alt={text} />
            <p>{text}</p>
        </Link>
        </Fragment>
    );
}
 
export default EnlacesLaterales;