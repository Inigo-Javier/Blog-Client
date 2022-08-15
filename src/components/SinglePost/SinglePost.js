import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './SinglePost.css'

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]

    const [post, setPost] = useState({});

    useEffect(() => {
        const fechPostIdPath = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${path}`)
            console.log(response.data)
            setPost(response.data)
        }
        fechPostIdPath()
    }, [path])
    
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img src='https://www.militariazone.com/upload/images/shopprod/25552/a-bridge-too-far-movie-still-featuring-anthony-hopkins_25552_pic1_size4.webp' alt='' className='singlePostImg' />
                <h1 className='singlePostTitle'>
                    title a bridge too far
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAutor'>Autor:<b>Safak</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDescription'>
                    Loremmwdcojkwevnwrvwr vgr   bgt3q4cjnyrjn tyc jheathteh eth etahje hjet het h eth etrh eth et heath etrt he th eH ETH ET HEThetheatah

                    Loremmwdcojkwevnwrvwr vgr   bgt3q4cjnyrjn tyc jheathteh eth etahje hjet het h eth etrh eth et heath etrt he th eH ETH ET HEThetheatahLoremmwdcojkwevnwrvwr vgr   bgt3q4cjnyrjn tyc jheathteh eth etahje hjet het h eth etrh eth et heath etrt he th eH ETH ET HEThetheatahLoremmwdcojkwevnwrvwr vgr   bgt3q4cjnyrjn tyc jheathteh eth etahje hjet het h eth etrh eth et heath etrt he th eH ETH ET HEThetheatahLoremmwdcojkwevnwrvwr vgr   bgt3q4cjnyrjn tyc jheathteh eth etahje hjet het h eth etrh eth et heath etrt he th eH ETH ET HEThetheatahLoremmwdcojkwevnwrvwr vgr   bgt3q4cjnyrjn tyc jheathteh eth etahje hjet het h eth etrh eth et heath etrt he th eH ETH ET HEThetheatah
                </p>
            </div>
        </div>
    )
}
