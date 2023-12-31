import {useState,useEffect,useContext,} from 'react'

import Input from './InputBox'
import Post from './PostBox'

import createPost from '../../api/Post/createPost'
import getPost from '../../api/Post/getPost'
import deletePost from '../../api/Post/deletePost'

import { AuthContext } from '../../auth/authContext'
import './index.scss'

const App = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

useEffect(()=> {
  if(user.auth){
  const fetchtDatas = async ()=>{
  const datas = await getPost();
  setPosts(datas.reverse());
}
  fetchtDatas();
}
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
        {/* <Input addPost = {handleAddPost} /> */}
        <p className='p-text-home'>{`Welcome: ${user.username}`}</p>
        {posts.map((post) => 
        (<Post key={post._id} id={post._id} username_review = {post.username_review} title={post.title} image={post.image} point={post.point} review={post.review} deletePost ={handleDeletePost}>{post}</Post>)
        )}
        </div>
  )
}

export default App
