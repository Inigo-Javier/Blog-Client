import {React} from 'react'
import './HomePage.css'
// import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
// import axios from 'axios'

export default function HomePage() {
    return (
        <>
            <Header />
            <div className='homePage'>
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}
