import { Link } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm'>
                <label>Email</label>
                <input type="email" placeholder='Enter your email...'
                    required ></input>
                <label>Password</label>
                <input type="password" placeholder='Enter your password...'
                    required></input>
                <button className='loginButton'>Login</button>
            </form>
            <button className='loginRegisterButton'>
                <Link className='Link' to="/registro">Register</Link>
            </button>
        </div>
    )
}
