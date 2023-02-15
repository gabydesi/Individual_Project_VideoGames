const axios = require('axios')
const { API_KEY } = process.env
const {Videogame, Genre} = require('../db')

//función que me traiga la info de 100 videojuegos = 5 páginas
const apiVideogames = async() => {
    
    let api =  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=1`)
    let api2 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`)
    let api3 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)
    let api4 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`)
    let api5 = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`)
    
    let results = await Promise.all([api, api2, api3, api4, api5]);
        
    return results.map(result=> result.data.results).reduce((acc, val) => acc.concat(val), [])
}


// función que limpia la información y me trae sólo lo que necesito desde la api para todos los videogames
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

//función que limpia la información y me trae sólo lo que necesito desde la db para todos los videogames
const cleanVideoGamesDb = (arr) => {
    const clean = arr.map((element) => {
        return {
            id: element.id,
            name: element.name,
            platforms: element.platforms,
            image: element.image,
            released: element.released,
            rating: element.rating,
            genres: element.genres.map((genre) => genre.name),
            createdDB: true
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
            description:game.description_raw,
            createdDB: false
        }
    }
}

//función que limpia la info que necesito traer desde la DB, por ID
const cleanGamesIDfromDB = async(id) => {
    const dBgames = await Videogame.findOne({ where: { id }, include: Genre });
        return {
            id: dBgames.id,
            name: dBgames.name,
            platforms: dBgames.platforms,
            image: dBgames.background_image,
            released: dBgames.released,
            rating: dBgames.rating,
            genres:dBgames.genres.map((genre)=> genre.name),
            description:dBgames.description,
            createdDB: true
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
            genres: element.genres.map((genre) => genre.name).toString() || "Adventure",
            createdDB: false
        }
    })
   return apiGames
}



module.exports = {
    cleanGamesByID,
    apiVideogames,
    cleanVideoGamesApi,
    cleanGamesByName,
    cleanVideoGamesDb,
    cleanGamesIDfromDB,

}