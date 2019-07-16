import React from 'react';

const validationComponent = (props) => {

    let message = "";
    message = (props.textLength < 6) ? 'Text is too short' : 'Text long enough';
    return (
        <div><p>{message}</p></div>
    )
};

export default validationComponent;