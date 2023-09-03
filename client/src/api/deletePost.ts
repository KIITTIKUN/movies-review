const deletePost = async (id)=>{
    await fetch(`http://localhost:3000/movieReviewDatas/${id}`,
      {method: "DELETE",}
      );
}

export default deletePost