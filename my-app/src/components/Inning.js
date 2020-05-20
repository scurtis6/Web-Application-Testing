import React from 'react';

const Inning = props => {
    console.log(props);
    return (
        <div>
            <p>Innings: {props.inning}</p>
            <p>Outs: {props.out}</p>
        </div>
    )
}

export default Inning;