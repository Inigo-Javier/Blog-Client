import { Link } from 'react-router-dom'
import './Topbar.css'
import { Context } from './../../context/AuthContext'
import { useContext } from 'react'

export default function TopBar() {

    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <nav className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest-square"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='Link' to="/">HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='Link' to="/about">ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='Link' to="/ajustes">CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='Link' to="/write">WRITE</Link>
                    </li>
                    <li className='topListItem' onClick={handleLogout}>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>


            <div className='topRight'>

                {
                    user ?
                        (
                            <Link to="/ajustes">
                                <img
                                    className="topImg"
                                    src={PF + user.profilePic}
                                    alt="" />
                            </Link>
                        ) : (
                            <ul className='topList'>
                                <li className='topListItem'>
                                    <Link className='Link' to="/login">LOGIN</Link>
                                </li>
                                <li className='topListItem'>
                                    <Link className='Link' to="/registro">REGISTER</Link>
                                </li>
                            </ul>)
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    )
}