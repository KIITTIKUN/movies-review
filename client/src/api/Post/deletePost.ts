const deletePost = async (id: string, token: string)=>{
    await fetch(`http://localhost:3000/movieReviewDatas/${id}`,
      {method: "DELETE",
      headers: {'x-access-token': token}}
      );
}

export default deletePost