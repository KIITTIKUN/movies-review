import {useState,useEffect} from 'react'

import Navbar from '../components/Navbar'
import Movie from '..//components/Movie'
import Footer from '../components/Footer'

import '../styles/Navbar.css'
import '../styles/Footbar.css'

import getMovie from '../api/getMovie';

const Main = () => {
  const [movie, setMovie] = useState([]);
 
useEffect(()=> {
  const fetchDatas = async ()=>{
  const datas = await getMovie();
  setMovie(datas.results)
}
  fetchDatas();
},[])

  return (
      <div>
        <Navbar></Navbar>
        {movie.map((movie) => 
        (<Movie key={movie.id} img={movie.poster_path}title={movie.title}>{movie}</Movie>)
        )}
        <Footer></Footer>
        </div>
  )
}

export default Main
