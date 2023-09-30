import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import './index.scss'

const Post = ({id, title, image, point, review, deletePost}) => {
    return(
        <div className='Post'>
            <button className='Delete-post' onClick={()=>deletePost(id)}>delete</button>
            <Link to={`movieReviewDatas/${id}`} style={{ textDecoration: 'none',color: 'rgb(0,0,0)' }}>
            {/* <div><p>Comment: {id}</p></div> */}
            <div className='Title'>{title}</div>
            <div className='Image'>{image}</div>
            <div className='Point'>{point}</div>
            <div className='Review'>{review}</div>
            </Link>
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
}
export default Post 