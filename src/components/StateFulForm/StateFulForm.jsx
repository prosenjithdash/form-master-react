import React, { useState } from 'react';

const StateFulForm = () => {

    // Individual state

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
    }

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onClick={handleNameChange}
                    type="text" name='name' placeholder='Type name' />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name='email' placeholder='Type email' />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name='password' placeholder='Type password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFulForm;