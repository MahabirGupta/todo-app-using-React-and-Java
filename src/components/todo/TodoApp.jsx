import { useState } from 'react'
import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
export default function TodoApp() {
    return (
        <div className="TodoApp">
            
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
        <Route path='/' element={ <LoginComponent /> }></Route>
        <Route path='/login' element={ <LoginComponent /> }></Route>
        <Route path='/welcome/:username' element={<WelcomeComponent /> }></Route>
        <Route path='/todos' element={<ListTodosComponent /> } />
        <Route path='*' element={<ErrorComponent /> }></Route>
        <Route path='/logout' element={<LogoutComponent /> } />
    </Routes>
    <FooterComponent />
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
            navigate(`/welcome/${username}`)
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

    const {username } = useParams()
    // const params = useParams()
//   console.log(params.username)
  console.log(username)
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username }</h1>
            <div>
                {/* /todos is the URL of the todos page */}
                Manage your todos - <Link to="/todos">Go here</Link>
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

function ListTodosComponent() {
    
    const today = new Date()
    // targetDate is the attribute
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    // create an array of todos
    const todos = [
                    {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
                    {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
                ]


                return (
                    <div className="container">
                        <h1>Things You Want To Do!</h1>
                        <div>
                            <table className="table">
                                <thead>
                                        <tr>
                                            <td>ID</td>
                                            <td>Description</td>
                                            <td>Is Done?</td>
                                            <td>Target Date</td>
                                        </tr>
                                </thead>
                                <tbody>
                                {
                                    todos.map(
                                        todo => (
                                           
                                            <tr key={todo.id}>                                           
                                                <td>{todo.id}</td> 
                                                <td>{todo.description}</td>
                                                <td>{todo.done.toString()}</td>
                                                <td>{todo.targetDate.toDateString()}</td>
                                            </tr>
                                        )
                                    )
                                }
                                </tbody>
            
                            </table>
                        </div>
                    </div>
                )
}

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.in28minutes.com">in28minutes</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="container">
                Your Footer
            </div>
        </footer>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our App. Come back soon!
            </div>
        </div>
    )
}