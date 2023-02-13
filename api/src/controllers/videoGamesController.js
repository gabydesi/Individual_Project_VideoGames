const axios = require('axios')
const {Videogame, Genre} = require('../db')

const { API_KEY } = process.env


// const apiGames = async() => {
//     let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`)
//     let api2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
//     let api3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
//     let api4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
//     let api5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)

//     const allApiGames = [api.data.results, api2.data.results, api3.data.results, api4.data.results, api5.data.results].reduce((acc, val) => acc.concat(val), [])
//     const apiInfo = allApiGames.map((game) => {
//         let platform = game.platforms.map((plat) => plat.platform.name)
//         let genres = game.genres.map((genre) => genre.name)

//     return {
//         id: game.id,
//         name: game.name,
//         platform: platform,
//         image: game.background_image,
//         released: game.released,
//         rating: game.rating,
//         genres: genres.toString()
//     }
//     })
//     return apiInfo;
// }


// const dbGames = async() => {
//     let dataBase = await Videogame.findAll({
//         include:[Genres]
//     })
//     dataBase = dataBase.map((game) => {
//         const genres = game.genres.map((genre) => genre.name)
//         return {
//         id: game.id,
//         name: game.name,
//         platform: game.platform,
//         image: game.background_image,
//         released: game.released,
//         rating: game.rating,
//         genres: genres.toString(),
//         createdDB: true
//         }
//     })
//     return dataBase;
// }

// const getAllGames = async() => {
//     const gamesApi = apiGames()
//     const gamesDB = dbGames() 
//     return [...gamesApi, ...gamesDB]
// }


// const getVideogamesByName = async() => {
//     const allGames = await getAllGames()
//     return allGames.filter(game.name.toLowerCase().includes(name.toLowerCase())) 

// }


const createGame = async(name, description, platforms, image, released, rating) => {
    let newGame = await Videogame.create({name, description, platforms, image, released, rating})
    return newGame;
}

module.exports = {
    // getAllGames,
    // getVideogamesByName,
    createGame,
}
