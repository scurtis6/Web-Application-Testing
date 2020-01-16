import React from 'react';

const Display = props => {
    console.log(props);
    return (
        <div>
            <h2>Display</h2>
            <p>Strikes: {props.strike}</p>
            <p>Balls: {props.ball}</p>
            {/* <p>Hits: {props.hit}</p> */}
        </div>
        
    )
}

export default Display;