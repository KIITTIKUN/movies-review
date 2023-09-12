import propTypes from 'prop-types'

import './index.css'

const Movie = ({title,img}) => {
    return (
        <div className='container-div-image'>
            <p className="movie-title">{title}</p>
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w200/${img}`}/>
        </div>
    )
}

Movie.propTypes={
    title: propTypes.string.isRequired,
    img: propTypes.string.isRequired
}
export default Movie