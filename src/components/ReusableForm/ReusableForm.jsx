// import React from 'react';

// const ReusableForm = ({formTitle , handleSubmit, submitBtnText='Submit'}) => {

//     const handleLocalSubmit = (e) => {
//         e.preventDefault();
//         const data = {
//             name: e.target.name.value,
//             email: e.target.email.value,
//             password: e.target.password.value


//         }
//         handleSubmit(data)

//     }
//     return (
//         <div>
//             <h2>{formTitle}</h2>
//             <form onSubmit={handleLocalSubmit}>
//                 <input type="text" name='name' placeholder='Type name' />
//                 <br />
//                 <input type="email" name='email' placeholder='Type email' />
//                 <br />
//                 <input type="password" name='password' placeholder='Type password' />
//                 <br />
//                 <input type="submit" value={submitBtnText} />
//             </form>
//         </div>
//     );
// };

// export default ReusableForm;


import React from 'react';

const ReusableForm = ({ fromTitle,handleSubmit, submitBTNText='Submit', children}) => {

    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)

    }
    return (
        <div>
            {/* <h2>{ fromTitle}</h2> */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name='name' placeholder='Type name' />
                <br />
                <input type="email" name='email' placeholder='Type email' />
                <br />
                <input type="password" name='password' placeholder='Type password' />
                <br />
                <input type="submit" value={submitBTNText} />
            </form>
        </div>
    );
};

export default ReusableForm;