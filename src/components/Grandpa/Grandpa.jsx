import React from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
const Grandpa = () => {
    return (
        <div className='grandpaStyle '>
            <h2>Grandpa</h2>

            <div className='flex'>
                <Dad />
                <Uncle />
                <Aunty />
            </div>
        </div>
    );
};

export default Grandpa;