import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import axios from 'axios'
// min 16:54--------------------------------
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
                        <li key={index} className='sidebarListItem'>{eachCat.name}</li>
                    )}
                    {/* <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>Tech</li>
                    <li className='sidebarListItem'>Cinema</li> */}
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
