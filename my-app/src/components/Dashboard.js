import React, { useState } from 'react';

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

    
}

export default Dashboard;