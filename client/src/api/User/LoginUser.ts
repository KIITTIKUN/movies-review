const LoginUser = async (username: String, password: String) => {
    try {
        const response = await fetch('http://localhost:3000/userDatas/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            }), 
        });

        if (!response.ok) {
            console.error('Response not ok:', response.status, response.statusText);
            throw new Error('Login failed');
        }

        return response.json();
    } catch (error) {
        console.error('An error occurred during login:', error);
        throw new Error(error);
    }
}

export default LoginUser;