import PropTypes from 'prop-types'

import './index.scss'

const ProfileReview = ({id,username_review, title, image, point, review, deletePost,token}) => {
    return(
        <div className='Post'>
            <button className='Delete-post' onClick={()=>deletePost(id,token)}>delete</button>
            <div className='username_review'>Username: {username_review}</div>
            <div className='Title'>{title}</div>
            <div className='Image'>
            <img className="movie-home" src={`${image}`} alt={title}/>
            </div>
            <div className='Point'>{point}</div>
            <div className='Review'>{review}</div>
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