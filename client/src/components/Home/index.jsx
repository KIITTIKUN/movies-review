import {useState,useEffect} from 'react'

import Input from './InputBox'
import Post from './PostBox'
import Footer from '../Footer'

import createPost from '../../api/createPost'
import getPost from '../../api/getPost'
import deletePost from '../../api/deletePost'

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
        <Input addPost = {handleAddPost} />
        {posts.map((post) => 
        (<Post key={post._id} id={post._id} title={post.title} deletePost ={handleDeletePost}>{post}</Post>)
        )}
        <Footer></Footer>
        </div>
  )
}

export default App
