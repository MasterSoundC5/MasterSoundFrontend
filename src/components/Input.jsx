import React, { Fragment } from 'react';

const Input = ({InputName, type, placeholder, name}) => {
    return (
        <Fragment>
            <h4>{InputName}</h4>
            <input type={type} placeholder={placeholder} name={name} />
        </Fragment>
    );
}
 
export default Input;