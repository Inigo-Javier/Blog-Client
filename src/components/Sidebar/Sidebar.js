import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
            setCats(res.data);

        };
        getCats();
    }, []);
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="./images/hoare-mike-mercenary.jpg" alt="Mike Hoare with his personal bodyguard Sergeant Donald Grant in 1964" />
                <p>
                    loremqelrkb
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map((eachCat, index) =>
                        <Link to={`/?cat=${eachCat.name}`} className="Link" key={index}>
                            <li className='sidebarListItem'>{eachCat.name}</li>
                        </Link>
                    )}
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarSocialIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarSocialIcon fa-brands fa-twitter"></i>
                    <i className="sidebarSocialIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarSocialIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
