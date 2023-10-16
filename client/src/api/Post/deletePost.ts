const deletePost = async (id: string, token: string, username_review:string)=>{
  try{
    await fetch(`http://localhost:3000/movieReviewDatas/${id}`,
      {method: "DELETE",
      headers: {'Content-Type': 'application/json','x-access-token': token},
      body: JSON.stringify({
        username_review,
        token
    }), }
      );
  }catch(err){
    console.error(err)
  }
}

export default deletePost