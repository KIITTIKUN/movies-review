import { useState, useEffect, useContext } from "react";


import ProfileColumn from "./Profilecolumn/index";
import ProfileReview from "./ProfileReview";
import { AuthContext } from '../../auth/authContext'

import deletePost from "../../api/Post/deletePost";
import getPost from "../../api/Post/getPost";
import './index.scss'


const Profile = () =>{
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

      const handleDeletePost = async (reviewDataId,username_review) => {
        await deletePost(reviewDataId,user.token,username_review);
        setPosts(posts.filter((post)=> post._id !== reviewDataId))
      }

    return (<div className="Profile-page">
    <ProfileColumn/>
    <div className="profile-post">
        {posts.filter((post) => post.username_review === user.username).map((post) => 
        (<ProfileReview key={post._id} id={post._id} username_review = {post.username_review} title={post.title} image={post.image} point={post.point} review={post.review} deletePost={handleDeletePost}>{post}</ProfileReview>)
        )}
    </div>
    </div>
    )
}

export default Profile