import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import './HomePage.css'
import axios from 'axios'

export default function HomePage() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);

            setPosts(response.data)
        };
        fetchPosts();
    }, [])


    return (
        <>
            <Header />
            <div className='homePage'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
