import React, { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Friend = () => {

    // use ContextAPI
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>Gift:{gift}</p>
        </div>
    );
};

export default Friend;