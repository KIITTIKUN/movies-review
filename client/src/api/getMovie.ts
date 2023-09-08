import config from '../../moviekey'

type TMovie = {
    title: string;
}

const apiKey = config.apiKey;
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=10`;

const getMovie = async (apikey) :Promise<TMovie[]> => { 
    const response = await fetch(apiUrl)
    return response.json();
}

export default getMovie