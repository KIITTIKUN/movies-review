import {useState,useEffect} from 'react'

import Movie from './MovieBox'
import SearchBox from './SearchBox';

import './index.scss'

import getMovie from '../../api/Movie/getMovie';
import getMovieBySearchTitle from '../../api/Movie/getMovieBySearchTitle';

const Main = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=> {
  const fetchDatas = async (page)=>{
  let datas
  if(searchTerm){
    datas = await getMovieBySearchTitle(searchTerm,page);
  }else{
    datas = await getMovie(page);
  }
  setMovie(datas.results);
  }
  fetchDatas(page);

},[page,searchTerm])

const handleSearch = (term) => {
  setSearchTerm(term);
  setPage(1);
};

const handleClickNextpage = () => {
  setPage(page + 1);
};

const handleClickPreviousPage = () => {
  page>1?setPage(page - 1):alert(`this page is page:${page} not previous page`)
};

  return (
      <div>
        <SearchBox  onSearch={handleSearch}/>
        <div className='page-controller'>
        <button className='previous-page' onClick={handleClickPreviousPage}>{"<"}</button>
        <span>{page}</span>
        <button className='next-page' onClick={handleClickNextpage}>{">"}</button>
        </div>
        <div className='container-movie'>
        {movie.map((movie) => 
        (<Movie key={movie.id} id={movie.id} img={movie.poster_path}title={movie.title}>{movie}</Movie>)
        )}
        </div>
        </div>
  )
}

export default Main
