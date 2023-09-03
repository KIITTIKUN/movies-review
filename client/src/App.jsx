import {useState,useEffect} from 'react'

import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([]);
 
useEffect(()=> {
  const fetchtDatas = async ()=>{
  const response = await fetch('http://localhost:3000/movieReviewDatas');
  const datas = await response.json();
  setPosts(datas);
}
  fetchtDatas();
},[])

  const handleAddPost = (title) => {
    const newPost = {title};
    setPosts([newPost,...posts]);
  }

  const handleDeletePost = async (reviewDataId) => {
    await fetch(`http://localhost:3000/movieReviewDatas/${reviewDataId}`,
      {method: "DELETE",}
      );
    setPosts(posts.filter((post)=> post._id !== reviewDataId))
  }

  return (
      <div>
        <Navbar></Navbar>
        <Input addPost = {handleAddPost} />
        {posts.map((post) => 
        (<Post key={post.id} id={post._id} title={post.title} deletePost ={handleDeletePost}>{post}</Post>)
        )}
        </div>
  )
}

export default App
