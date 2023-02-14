const axios = require('axios')
const {Videogame, Genre} = require('../db')
const { API_KEY } = process.env


//función que me traiga la info de 100 videojuegos = 5 páginas
const apiVideogames = async() => {
    let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`)
    let api2 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
    let api3 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
    let api4 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
    let api5 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)

    return [api.data.results, api2.data.results, api3.data.results, api4.data.results, api5.data.results].reduce((acc, val) => acc.concat(val), [])
}


// //función que limpia la información y me trae sólo lo que necesito desde la api para todos los videogames
const cleanVideoGamesApi = (arr) => {
    const clean = arr.map((element) => {
        return {
            id: element.id,
            name: element.name,
            platforms: element.platforms.map((plat) => plat.platform.name),
            image: element.background_image,
            released: element.released,
            rating: element.rating,
            genres: element.genres.map((genre) => genre.name).toString(),
            createdDB: false
        }
    })
    return clean
}


//función que limpia la info que necesito traer desde la api, por ID
const cleanGamesByID = async(id) => {
    const apiGames = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
    if(apiGames){
        let game = apiGames;
        return {
            id: game.id,
            name: game.name,
            platforms: game.platforms.map((plat)=> plat.platform.name),
            image: game.background_image,
            released: game.released,
            rating: game.rating,
            genres:game.genres.map((genre)=> genre.name).toString(),
            description:game.description,
            createdDB: false
        }
    }
}

//función que limpia la info que necesito traer desde la api, por name
const cleanGamesByName = async(name) => {
    const apiGames = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results.map((element) => {
        return {
            id: element.id,
            name: element.name,
            platforms: element.platforms.map((plat) => plat.platform.name),
            image: element.background_image,
            released: element.released,
            rating: element.rating,
            genres: element.genres.map((genre) => genre.name).toString(),
            createdDB: false
        }
    })
   return apiGames
}


module.exports = {
    cleanGamesByID,
    apiVideogames,
    cleanVideoGamesApi,
    cleanGamesByName
}