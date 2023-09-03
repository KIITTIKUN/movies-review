const createPost = async (title: string) => {
    const response = await fetch('http://localhost:3000/movieReviewDatas',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                title,
            }), 
    })
    return response.json();
}

export default createPost