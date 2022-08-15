import Post from '../Post/Post.js'
import './Posts.css'

export default function Posts({ posts }) {

    return (
        <div className='posts'>
            {posts.map((eachPost, index) =>
                <Post eachPost={eachPost} key={index} />
            )}

        </div>
    )
}
