const {Videogame, Genre} = require('../db')
const { apiVideogames, cleanVideoGamesApi,cleanGamesByID, cleanGamesByName } = require("./utils")


const getAllVideogamesController = async() => {
    const dataBaseGames = await Videogame.findAll()
    const apiGames = await apiVideogames()
    const apiGamesClean = cleanVideoGamesApi(apiGames)
    return [...apiGamesClean, ...dataBaseGames]
}


const getGameByNameController = async (name) => {
    const dbGames = await Videogame.findAll({where: {name: name} })
    const apiGames = await cleanGamesByName(name)

    return apiGames
}


const getgameByIdController = async (id, gameSource) => {
    const game = gameSource === "API" ? 
    await cleanGamesByID(id)
    : await Videogame.findByPk(id)
    return game
  }


const createGameController = async(name, description, platforms, image, released, rating, genres) => {
    const newGameDB = await Videogame.create(name, description, platforms, image, released, rating, genres)
    return newGameDB
}




// const getVideogamesByName = async() => {
//     const allGames = await getAllGames()
//     return allGames.filter(game.name.toLowerCase().includes(name.toLowerCase())) 

// }




module.exports = {
    getAllVideogamesController,
    getGameByNameController,
    getgameByIdController,
    createGameController
}
