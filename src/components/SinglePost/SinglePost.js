import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import './SinglePost.css'
import { Context } from './../../context/AuthContext'

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const PF = 'http://localhost:5000/images/'
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const fechPostIdPath = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${path}`)

            setPost(response.data)
            setTitle(response.data.title)
            setDesc(response.data.desc)
        }
        fechPostIdPath()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${path}`, {
                data: { username: user.username },
            })
            window.location.replace("/")
        } catch (err) { }
    }


    const handleUpdate = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false)
        } catch (err) { }
    };

    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img src={PF + post.photo} alt='' className='singlePostImg' />
                )}{
                    updateMode ? <input
                        type='text' value={title}
                        className='singlePostTitleInput'
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                        : (


                            <h1 className='singlePostTitle'>
                                {title}
                                {post.username === user?.username && (
                                    <div className='singlePostEdit'>
                                        <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                        <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                                    </div>
                                )}
                            </h1>
                        )
                }
                <div className='singlePostInfo'>
                    <span className='singlePostAutor'>Autor:
                        <Link to={`/?user=${post.username}`} className="Link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span
                        className='singlePostDate'>{new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {updateMode ? (
                    <textarea className='singlePostDescInput' value={desc}
                        onChange={(e) => setDesc(e.target.value)} />
                ) : (
                    <p
                        className='singlePostDescription'>{desc}
                    </p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    )
}

