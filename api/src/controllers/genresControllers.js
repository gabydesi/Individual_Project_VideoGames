const axios = require("axios")
require('dotenv').config()
const {API_KEY} = process.env
const {Genre} = require("../db")


const getGamesGenres = async() => {

    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const nameGenres = genresApi.data.results;

    const genreCreationPromises = nameGenres.map(g =>
      Genre.findOrCreate({
        where: {
          name: g.name,
        },
      })
    );
    await Promise.all(genreCreationPromises);

    const allGenres = await Genre.findAll();
    return allGenres
}




module.exports = {getGamesGenres}