const {Videogame, Genre} = require('../db')
const { apiVideogames, cleanVideoGamesApi,cleanGamesByID, cleanGamesByName, cleanVideoGamesDb, cleanGamesIDfromDB } = require("./utils")
const { Op } = require("sequelize");


const getAllVideogamesController = async() => {
    const dataBaseGames = await Videogame.findAll({include: Genre})
    const dataBaseGamesClean = cleanVideoGamesDb(dataBaseGames)

    const apiGames = await apiVideogames()
    const apiGamesClean = cleanVideoGamesApi(apiGames)

    const results = [...apiGamesClean, ...dataBaseGamesClean]
    return results
}

//filtrado por nombre sólo de los 100 videojuegos
const getGameByNameController = async (name) => {
    let allGames = await getAllVideogamesController()
    const gameName = allGames.filter(g => g.name.toLowerCase().includes(name.toLowerCase()))
    return gameName
}

//filtrado por nombre con el endpoint `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
// const getGameByNameController = async (name) => {
//     let dbGames = await Videogame.findAll({
//         where: { name: { [Op.iLike]: `%${name}%` } },
//         include: Genre,
//       });
//     const dbGamesFiltered = cleanVideoGamesDb(dbGames)  

//     const apiGames = await cleanGamesByName(name)
//     const apiGamesFiltered = apiGames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()))
//     return [...apiGamesFiltered, ...dbGamesFiltered] 
// }


const getgameByIdController = async (id, gameSource) => {
    const game = gameSource === "API" ? 
    await cleanGamesByID(id)
    : await cleanGamesIDfromDB(id)
    return game
  }


const createGameController = async(name, platforms, image, released, rating, genres, description) => {
    const newGameDB = await Videogame.create({name, platforms, image: image || "https://www.mediaplaynews.com/wp-content/uploads/2020/02/videogames-1-e1522270884482.jpg", released, rating, description})
    genres.map(async(genr) => {
        let genres = await Genre.findOne({
            where: {
                name: genr,
            }
        })
        await newGameDB.addGenre(genres)
    })
}


const deleteGameByIdController = async(id) => {
    const dataBaseGames = await Videogame.findAll({include: Genre})
    const dataBaseGamesClean = cleanVideoGamesDb(dataBaseGames)

    if(dataBaseGamesClean.length) {
        await Videogame.destroy({
            where: {id: id}
          });
    }
}




module.exports = {
    getAllVideogamesController,
    getGameByNameController,
    getgameByIdController,
    createGameController,
    deleteGameByIdController
}
