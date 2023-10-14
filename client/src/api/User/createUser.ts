const createUser = async (username: String,
    password: String,
    email: String,
    gender: String,
    age: Number) => {
    const response = await fetch('http://localhost:3000/userDatas/register',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username,
                password,
                email,
                gender,
                age
            }), 
    })
    return response.json();
}

export default createUser