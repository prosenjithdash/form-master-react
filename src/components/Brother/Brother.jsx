import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = () => {

    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>Grandpa Money: {money}</p>
            <button onClick={()=>setMoney(money - 500)}>Take 500 tk</button>
        </div>
    );
};

export default Brother;