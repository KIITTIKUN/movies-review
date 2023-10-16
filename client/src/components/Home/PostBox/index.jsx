import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Star from '../Star';

import './index.scss'

const Post = ({id,username_review, title, image, point, review}) => {
    return(
        <div className='Post'>
            {/* <div><p>Comment: {id}</p></div> */}
            <div className='username_review'>Review By Username: {username_review}</div>
            <div className='Title'>Title {title}</div>
            <div className='Image'>
            <img className="movie-home" src={`${image}`} alt={title}/>
            </div>
            <Star className='Point' score={point}>{point}</Star>
            <div className='Review'>Review: {review}</div>
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    username_review: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
}
export default Post 