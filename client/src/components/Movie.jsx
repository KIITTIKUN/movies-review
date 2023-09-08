import propTypes from 'prop-types'

const Movie = ({title,img}) => {
    return (
        <div>
            <p>{title}</p>
            <img src={`https://image.tmdb.org/t/p/w200/${img}`}/>
        </div>
    )
}

Movie.propTypes={
    title: propTypes.string.isRequired,
    img: propTypes.string.isRequired
}
export default Movie