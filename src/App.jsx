
import './App.css'
import HookForm from './components/HookForm/HookForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {

  // const handleSignUpSubmit = (data) => {
  //   console.log('SignUp data: ',data)

  // }

  // const handleUpdateProfile = (data) => {
  //   console.log('Update Profile data: ', data)

  // }

  const handleSignup = (data) => {
    console.log('Signup data:',data)
  }
  const handleUpdate = (data) => {
    console.log('Update data:',data)
  }
  return (
    <div>
      <h1>Form Master React</h1>
      {/* <SimpleForm/> */}
      {/* <StateFulForm/> */}
      {/* <RefForm/> */}
      {/* <HookForm/> */}
      {/* <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit} />
      <ReusableForm formTitle={'Profile Update '} submitBtnText='Update' handleSubmit={handleUpdateProfile}/> */}



      <ReusableForm fromTitle='SignUp' handleSubmit={handleSignup}>
        <div>
          <h4>Sign Up</h4>
          <p>Please Signup right now</p>
        </div>
      </ReusableForm>
        
      
      <ReusableForm fromTitle='User Update Profile' submitBTNText='Update' handleSubmit={handleUpdate}>
        <div>
          <h4>Update Profile</h4>
          <p>Please update profile right now</p>
        </div>
      </ReusableForm>

    </div>
  )
}

export default App
