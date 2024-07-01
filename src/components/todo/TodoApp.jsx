import { useState } from 'react'
import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
export default function TodoApp() {
    return (
        <div className="TodoApp">
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <LoginComponent /> }></Route>
        <Route path='/login' element={ <LoginComponent /> }></Route>
        <Route path='/welcome' element={<WelcomeComponent /> }></Route>
        <Route path='*' element={<ErrorComponent /> }></Route>
    </Routes>
    </BrowserRouter>
            {/* <LoginComponent />
            <WelcomeComponent /> */}
        </div>
    )
}

function LoginComponent() {

    // create a state variable
    const [username, setUsername] = useState('Mahabir') //initial value of username is 'Mahabir'
    const [password, setPassword] = useState('') //initial value of password is empty
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

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
            // If success navigate to welcome url
            navigate('/welcome')
        } else {
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    
    
    return (
        <div className="Login">
           <h1>Time to Login!</h1>
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
        <div className="WelcomeComponent">
            <h1>Welcome in28minutes</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}