import { useState } from 'react'
import './TodoApp.css'
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}

function LoginComponent() {

    // create a state variable
    const [username, setUsername] = useState('Mahabir') //initial value of username is 'Mahabir'
    const [password, setPassword] = useState('') //initial value of password is empty
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)


    function handleUsernameChange(event) {
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(username==='Mahabir' && password==='dummy'){
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    
    
    return (
        <div className="Login">
           
            <div className="LoginForm">
            
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
                {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
                {/* <SuccessMessageComponent /> */}
                {showErrorMessage && <div className="errorMessage">Authentication Failed. 
                                                Please check your credentials.</div>}
                {/* <ErrorMessageComponent /> */}
            </div>
        </div>
    )

    // function SuccessMessageComponent() {

    //     if(showSuccessMessage) {
    //         return <div className="successMessage">Authenticated Successfully</div>
    //     }
        
    //     return null   
    // }
    
    // function ErrorMessageComponent() {
    
    //     if(showErrorMessage) {
    //         return <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
    //     }
        
    //     return null   
    // }
}



function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}