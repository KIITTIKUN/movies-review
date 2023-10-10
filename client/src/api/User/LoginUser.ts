const LoginUser = async (username: String,password: String) => {
    const response = await fetch('http://localhost:3000/userDatas/login',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username,
                password,
            }), 
    })
    return response.json();
}

export default LoginUser