import React, { useState } from 'react';
import Display from './Display';
import Inning from './Inning';

const Dashboard = () => {
    const [ball, setBall] = useState(0);
    const [strike, setStrike] = useState(0);
    const [foul, setFoul] = useState(0);

    if (strike >= 3) {
        setBall(0);
        setStrike(0);
    }

    if (ball >= 4) {
        setBall(0);
        setStrike(0);
    }

    const hit = () => {
        setBall(0);
        setStrike(0);
    }

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
    }

    const addBall = () => {
        setBall(ball + 1);
    }

    return (
        <div>
            <Display ball={ball} strike={strike} hit={hit} />
            <button onClick={addStrike}>Strike</button>
            <button onClick={addBall}>Ball</button>
            <button onClick={foulBall}>Foul</button>
            <button onClick={hit}>Hit</button>
        </div>
    )
}

export default Dashboard;