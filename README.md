<h1>Movies review</h1>

<h2>Desciption</h2>
<p>This project build for use to write review and keep data about movie to database</p>
<h2>Table of contents</h2>

- [Config](#config)
- [Technologies](#technologies)

## Config 
Must have mongoDB \(suggest mongoDB atlas\) and lern more on [mongoDB](#https://account.mongodb.com/account/login?nds=true&_ga=2.235425735.710684979.1693930785-1851966909.1691570215),
 and next following

1. goto folder: server 
2. create file: .env
3. write code in file:

```
MONGO_URL= :Your URL MongoDB Atlas (must have)
TOKEN_KEY=your-secret-key-here
```
4. Go to the TMDb website (https://www.themoviedb.org/). Sign up and Log in
5. Visit the TMDb API section (https://www.themoviedb.org/settings/api). Click on "Create" to request a new API key.
6. copy API key
7. goto folder: client
8. create file moviekey.ts and write code:

```
const config = {
    apiKey: 'Your-API-key',
  };

export default config
```

and run both folder(server, client) with command : 

```
npm run dev
```
## Technologies

- Mongo DB
- Express
- React
- Node.js
- Vite
- MUI
- JWT