import config from '../../../moviekey'

type TMovie = {
    title: string;
}

const apiKey = config.apiKey;

const getMovieBySearchTitle = async (query:string,page:number) :Promise<TMovie[]> => { 
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;
    const response = await fetch(apiUrl)
    return response.json();
}

export default getMovieBySearchTitle