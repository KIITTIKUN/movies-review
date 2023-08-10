import {useState} from 'react'

import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'
import './App.css'

let id = 1;

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (title) => {
    const newPost = {id, title};
    setPosts([newPost,...posts]);
    id += 1;
  }

  const deletePost = (id) => {
    const updatedPost = posts.filter((post) => post.id !== id);
    setPosts(updatedPost);
  }
  return (
      <div>
        <Navbar></Navbar>
        <Input addPost = {addPost} />
        {posts.map((post) => 
        (<Post key={post.id} id={post.id} title={post.title} deletePost ={deletePost}>{post}</Post>)
        )}
        </div>
  )
}

export default App
