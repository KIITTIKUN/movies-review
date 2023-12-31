import PropTypes from 'prop-types'

import './index.scss'

const ProfileReview = ({id,username_review, title, image, point, review, deletePost,token}) => {
    return(
        <div className='Post'>
            <button className='Delete-post' onClick={()=>deletePost(id,username_review)}>delete</button>
            <div className='Title'>Title: {title}</div>
            <div className='Image'>
            <img className="movie-home" src={`${image}`} alt={title}/>
            </div>
            <div className='Point'>Point: {point} / 5</div>
            <div className='Review'>Review: {review}</div>
        </div>
    )
}

ProfileReview.propTypes = {
    id: PropTypes.string.isRequired,
    username_review: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired,
    token: PropTypes.string
}
export default ProfileReview 