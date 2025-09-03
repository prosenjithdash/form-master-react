import React, { createContext, useContext } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const AssetContext = createContext('gold')
const Grandpa = () => {

    const assets = 'Diamond Ring'

    return (
        <div className='grandpaStyle '>
            <h2>Grandpa</h2>

            <AssetContext.Provider value='gold'>
                <div className='flex'>
                    <Dad asset={assets} />
                    <Uncle />
                    <Aunty />
                </div>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * 1. Create a context and export it
 * 2. Add provider for context with a value.
 * 3. 
 */