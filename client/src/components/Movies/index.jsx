import {useState,useEffect} from 'react'

import Movie from './MovieBox'
import Footer from '../Footer'

import './index.scss'

import getMovie from '../../api/getMovie';

const Main = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=> {
  const fetchDatas = async ()=>{
  const datas = await getMovie(page);
  setMovie(datas.results)
}
  fetchDatas(page);

},[page])

const handleClickNextpage = () => {
  setPage(page + 1);
};

const handleClickPreviousPage = () => {
  page>1?setPage(page - 1):alert(`this page is page:${page} not previous page`)
};

  return (
      <div>
        <div className='page-controller'>
        <button className='previous-page' onClick={handleClickPreviousPage}>{"<"}</button>
        <span>{page}</span>
        <button className='next-page' onClick={handleClickNextpage}>{">"}</button>
        </div>
        <div className='container-movie'>
        {movie.map((movie) => 
        (<Movie key={movie.id} img={movie.poster_path}title={movie.title}>{movie}</Movie>)
        )}
        </div>
        <Footer></Footer>
        </div>
  )
}

export default Main