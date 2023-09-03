const getPost = async () => {
    const response = await fetch('http://localhost:3000/movieReviewDatas');
    return response.json();
}

export default getPost