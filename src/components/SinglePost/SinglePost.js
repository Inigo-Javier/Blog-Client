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

            setPost(response.data)
        }
        fechPostIdPath()
    }, [path])

    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img src={post.photo} alt='' className='singlePostImg' />
                )}

                <h1 className='singlePostTitle'>
                    {post.title}
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAutor'>Autor:<b>{post.username}</b></span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='singlePostDescription'>{post.desc}</p>
            </div>
        </div>
    )
}


// 'https://www.militariazone.com/upload/images/shopprod/25552/a-bridge-too-far-movie-still-featuring-anthony-hopkins_25552_pic1_size4.webp'
