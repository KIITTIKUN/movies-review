const createPost = async (token: string,title:string,image:string,point:number,review:string) => {
    const response = await fetch('http://localhost:3000/movieReviewDatas',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token
              },
            body: JSON.stringify({
                token,
                title,
                image,
                point,
                review
            }), 
    })
    return response.json();
}

export default createPost