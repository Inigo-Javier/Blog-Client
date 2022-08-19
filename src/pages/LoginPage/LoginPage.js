import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'
import { Context } from './../../context/AuthContext'
import axios from 'axios'
export default function LoginPage() {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {

            dispatch({ type: "LOGIN_FAILURE", payload: err })
        }
    }

    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    placeholder='Enter your username...'
                    required
                    ref={userRef}></input>
                <label>Password</label>
                <input
                    type="password" placeholder='Enter your password...'
                    required
                    ref={passwordRef}
                ></input>
                <button
                    className='loginButton' type="submit"
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
            <button className='loginRegisterButton'>
                <Link className='Link' to="/registro">Register</Link>
            </button>
        </div>
    )
}
