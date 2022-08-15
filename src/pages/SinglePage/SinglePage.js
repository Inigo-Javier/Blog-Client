import './SinglePage.css'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import SinglePost from '../../components/SinglePost/SinglePost.js'

export default function SinglePage() {
    return (
        <div className='singlePage'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}
