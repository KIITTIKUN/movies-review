import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Post = ({id, title, deletePost}) => {
    return(
        <div className='Post'>
            <button className='Delete-post' onClick={()=>deletePost(id)}>delete</button>
            <Link to={`movieReviewDatas/${id}`} style={{ textDecoration: 'none',color: 'rgb(0,0,0)' }}>
            <div><p>Comment: {id}</p></div>
            <div className='Title'>{title}</div>
            </Link>
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
}
export default Post 