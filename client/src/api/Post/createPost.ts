const createPost = async (username_review: string,title:string,image:string,point:number,review:string) => {
    const response = await fetch('http://localhost:3000/movieReviewDatas',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': username_review
              },
            body: JSON.stringify({
                username_review,
                title,
                image,
                point,
                review
            }), 
    })
    return response.json();
}

export default createPost