import React from 'react';

const RunsandErrors = props => {
    console.log(props);
    return (
        <div>
            {/* <h3>Runs and Errors</h3> */}
            <p>Runs: {props.run}</p>
            <p>Errors: {props.error}</p>
        </div>
    )
}

export default RunsandErrors;