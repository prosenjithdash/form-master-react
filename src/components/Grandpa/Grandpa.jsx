/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

// Create Context API
export const AssetContext = createContext('gold')
export const MoneyContext = createContext(5000)
const Grandpa = () => {

    const [money,setMoney] = useState(1000);
    const assets = 'Diamond Ring'

    return (
        <div className='grandpaStyle '>
            <h2>Grandpa</h2>
            <p>Net Money: { money}</p>

            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <div className='flex'>
                        <Dad asset={assets} />
                        <Uncle />
                        <Aunty />
                    </div>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * 1. Create a context and export it
 * 2. Add provider for context with a value.
 * 3. useContext to access value in the context API
 */