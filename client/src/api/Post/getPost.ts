type TPost = {
    id: string;
    title: string;
}

const getPost = async () :Promise<TPost[]> => {
    const response = await fetch('http://localhost:3000/movieReviewDatas');
    return response.json();
}

export default getPost