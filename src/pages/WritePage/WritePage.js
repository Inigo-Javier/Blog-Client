import { useContext, useState } from 'react'
import './WritePage.css'
import axios from 'axios'
import { Context } from '../../context/AuthContext'


export default function WritePage() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newPost = {
            username: user.username,
            title,
            desc
        }

        if (file) {
            const data = FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post(`${process.env.REACT_APP_API_URL}/upload`, data)
            } catch (err) {

            }
        }
        await axios.post(`${process.env.REACT_APP_API_URL}/posts`)
    }

    return (
        <div className='writePage'>
            <img
                className='writePageImg'
                src='https://warfarehistorynetwork.com/wp-content/uploads/M-Soldiers-1-4CJun06.jpg'
                alt='four mercenaries men in a car'
            />
            <form
                className='writePageForm'
                onSubmit={handleSubmit}
            >
                <div className='writePageFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className="writePageIcon fa-solid fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display: "none" }} />
                    <input type='text' placeholder='Title' className='writePageInput' autoFocus={true} />
                </div>
                <div className='writePageFormGroup'>
                    <textarea type="text" placeholder='Tell your story...' className='writePageInput writePageText'></textarea>
                </div>
                <button
                    className='writePageSubmit'
                    type="submit"
                >Publish</button>
            </form>
        </div>
    )
}
