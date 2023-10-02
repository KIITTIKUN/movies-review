import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

import './index.scss'

const Movie = ({title,img}) => {

    return (
        <div className='container-div-image'>
            <Link to={`/review?title=${encodeURIComponent(title)}&img=${encodeURIComponent(`https://image.tmdb.org/t/p/w500${img}`)}`} className="custom-link">
            <p className="movie-title">{title}</p>
            <img className="movie-image" alt={`${title}-image`} src={`https://image.tmdb.org/t/p/w200/${img}`}/>
            </Link>
        </div>
    )
}

Movie.propTypes={
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    img: propTypes.string.isRequired
}
export default Movie