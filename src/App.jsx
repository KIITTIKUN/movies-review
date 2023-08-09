import {useState} from 'react'

import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'
import './App.css'

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title){
    const newPost = {id, title};
    setPosts([newPost,...posts]);
    id += 1;
  }

  function deletePost(id){
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
