const {Videogame, Genre} = require('../db')
const { apiVideogames, cleanVideoGamesApi,cleanGamesByID, cleanGamesByName } = require("./utils")
const { Op } = require("sequelize");


const getAllVideogamesController = async() => {
    const dataBaseGames = await Videogame.findAll()
    const apiGames = await apiVideogames()
    const apiGamesClean = cleanVideoGamesApi(apiGames)

    return [...apiGamesClean, ...dataBaseGames]
}


const getGameByNameController = async (name) => {
    let dbGames = await Videogame.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: Genre,
      });

    const apiGames = await cleanGamesByName(name)
    const apiGamesFiltered = apiGames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()))
    return [...apiGamesFiltered, ...dbGames] 
}


const getgameByIdController = async (id, gameSource) => {
    const game = gameSource === "API" ? 
    await cleanGamesByID(id)
    : await Videogame.findByPk(id)
    return game
  }


const createGameController = async(name, platforms, image, released, rating, genres, description) => {
    const newGameDB = await Videogame.create({name, platforms, image: image || "https://www.mediaplaynews.com/wp-content/uploads/2020/02/videogames-1-e1522270884482.jpg", released, rating, description})
    genres.map(async(genr) => {
        let genre = await Genre.findOne({
            where: {
                name: genr,
            }
        })
        await newGameDB.addGenre(genre)
    })
}




module.exports = {
    getAllVideogamesController,
    getGameByNameController,
    getgameByIdController,
    createGameController
}
