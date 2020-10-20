import React, { Fragment } from 'react';
import '../styles/Pages Styles/SignIn.scss'

const Input = (props) => {
    return (
        <Fragment>
            <input type={props} placeholder={props} name={props} />
        </Fragment>
    );
}
 
export default Input;