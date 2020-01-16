import React, { useState } from 'react';
import Display from './Display';
import Inning from './Inning';
import RunsandErrors from './RunsandErrors';

const Dashboard = () => {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);
    const [inning, setInning] = useState(1);
    const [out, setOut] = useState(0);
    const [run, setRun] = useState(0);
    const [error, setError] = useState(0);

    if (strike >= 3) {
        setBall(0);
        setStrike(0);
    };

    if (ball >= 4) {
        setBall(0);
        setStrike(0);
    };

    if (inning >= 10) {
        setInning(1);
    };

    if (out >= 3){
        setOut(0);
    };

    const hit = () => {
        setBall(0);
        setStrike(0);
    };

    const foulBall = () => {
        if (strike === 0) {
            setFoul(1);
            setStrike(1);
        } else if (strike === 1) {
            setFoul(2);
            setStrike(2);
        } else if (strike === 2) {
            setFoul(foul + 1);
            setStrike(2);
        }
    };

    const addStrike = () => {
        setStrike(strike + 1);
    };

    const addBall = () => {
        setBall(ball + 1);
    };

    const addInning = () => {
        setInning(inning + 1)
    };

    const addOut = () => {
        setOut(out +1)
    };

    const addRun = () => {
        setRun(run + 1)
    };

    const addError = () => {
        setError(error + 1)
    };

    const resetRun = () => {
        setRun(0)
    };

    const resetError = () => {
        setError(0)
    };

    return (
        <div>
           <div className='display'>
           <Display ball={ball} strike={strike} hit={hit} />
            <button onClick={addStrike}>Strike</button>
            <button onClick={addBall}>Ball</button>
            <button onClick={foulBall}>Foul</button>
            <button onClick={hit}>Hit</button>
            </div>
            <div className="inning">
                <Inning inning={inning} out={out} />
                <button onClick={addInning}>Inning</button>
                <button onClick={addOut}>Out</button>
           </div>
           <div className="run-error">
               <RunsandErrors run={run} error={error} />
               <button onClick={addRun}>Run</button>
               <button onClick={resetRun}>Reset Run</button>
               <button onClick={addError}>Error</button>
               <button onClick={resetError}>Reset Error</button>
           </div>
        </div>
    )
}

export default Dashboard;