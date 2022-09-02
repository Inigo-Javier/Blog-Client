import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import './HomePage.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function HomePage() {




    const [posts, setPosts] = useState([]);
    const { search } = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`https://inigo-blog.herokuapp.com/api/posts${search}`);

            setPosts(response.data)
        };
        fetchPosts();
    }, [search])

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
