import config from '../../../moviekey'

type TMovie = {
    title: string;
}

const apiKey = config.apiKey;

const getMovieById = async (movieId:number) :Promise<TMovie[]> => { 
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    const response = await fetch(apiUrl)
    return response.json();
}

export default getMovieById