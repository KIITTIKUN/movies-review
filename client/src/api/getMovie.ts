import config from '../../moviekey'

type TMovie = {
    title: string;
}

const apiKey = config.apiKey;

const getMovie = async (page:number) :Promise<TMovie[]> => { 
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${page}`;
    const response = await fetch(apiUrl)
    return response.json();
}

export default getMovie