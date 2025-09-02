import React from 'react';
import useInputState from '../../hooks/useInputState';

const HookForm = () => {


    const [name,handleChange]= useInputState('pappu')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data', name)
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleChange} type="text" name='name' placeholder='Type name' />
                <br />
                <input type="email" name='email' placeholder='Type email' />
                <br />
                <input type="password" name='password' placeholder='Type password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;