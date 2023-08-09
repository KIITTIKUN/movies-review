import PropTypes from 'prop-types'
function Post({id, title, deletePost}) {

    return(
        <div className='Post'>
            <button className='Delete-post' onClick={()=>deletePost(id)}>delete</button>
            <div><p>Comment: {id}</p></div>
            <div className='Title'>{title}</div>
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired
}
export default Post 