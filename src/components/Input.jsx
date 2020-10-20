import React, { Fragment } from 'react';

const Input = (props) => {
    return (
        <Fragment>
            <input type={props} placeholder={props} name={props} />
            <h1>Texto</h1>
        </Fragment>
    );
}
 
export default Input;