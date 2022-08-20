import './Post.css'
import { Link } from "react-router-dom";



export default function Post({ eachPost }) {
    const PF = 'http://localhost:5000/images/'
    return (
        <div className='post'>

            {eachPost.photo && (
                <img
                    className='postImg' src={PF + eachPost.photo} alt="soldiers at war" />
            )}

            <div className='postInfo'>
                <div className='postCategories'>{
                    eachPost.categories.map((eachCategorie) => (
                        <span className='postCategorie'>{eachCategorie.name}</span>
                    ))
                }
                </div >

                <Link to={`/post/${eachPost._id}`} className="Link">
                    {<span className="postTitle">{eachPost.title}</span>}
                </Link>


                <hr />
                <span className='postDate'>{new Date(eachPost.createdAt).toDateString()}</span>
            </div>
            <p className='postDescription'>{eachPost.desc}
            </p>
        </div>
    )
}

// "https://www.gannett-cdn.com/-mm-/f338422ee8cbcff068f2e25db1fcf0efe66acb65/c=26-0-2852-2125/local/-/media/2017/01/16/USATODAY/USATODAY/636201802441929067-WW-36303-01-NARA-28-0887a.jpg?width=640"