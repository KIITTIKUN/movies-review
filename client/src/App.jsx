import {useState,useEffect} from 'react'

import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'
import './App.css'
import createPost from './api/createPost'
import getPost from './api/getPost'
import deletePost from './api/deletePost'

const App = () => {
  const [posts, setPosts] = useState([]);
 
useEffect(()=> {
  const fetchtDatas = async ()=>{
  const datas = await getPost();
  setPosts(datas);
}
  fetchtDatas();
},[])

  const handleAddPost = async (title) => {
    const newPost = await createPost(title);
    setPosts([newPost,...posts]);
  }

  const handleDeletePost = async (reviewDataId) => {
    await deletePost(reviewDataId);
    setPosts(posts.filter((post)=> post._id !== reviewDataId))
  }

  return (
      <div>
        <Navbar></Navbar>
        <Input addPost = {handleAddPost} />
        {posts.map((post) => 
        (<Post key={post._id} id={post._id} title={post.title} deletePost ={handleDeletePost}>{post}</Post>)
        )}
        </div>
  )
}

export default App
