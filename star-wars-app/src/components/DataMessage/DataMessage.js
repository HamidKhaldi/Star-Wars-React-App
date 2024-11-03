import React from 'react';


const DataMessage = ({ message }) => {

    return (
        <div className="swapi__no-data-div">{ message }</div>
    );
};

export default DataMessage;