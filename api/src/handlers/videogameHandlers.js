const { default: axios } = require('axios')
const  {
  getAllVideogamesController,
  getGameByNameController,
  getgameByIdController,
  createGameController
} = require('../controllers/videoGamesController')


const getVideogames = async(req,res)=>{
  const {name} = req.query
  const results = name ? await getGameByNameController(name) : await getAllVideogamesController()
  res.status(200).json(results)
}



const getVideogameById = async(req,res)=>{
  const {id} = req.params;
  //defino de donde proviene el ID si es de la api o de la db
  const gameSource = isNaN(id) ? "DB" : "API"
  try {
    const gameId = await getgameByIdController(id, gameSource) 
    res.status(200).json(gameId)
    
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}  




const createVideogame = async(req, res) => {
  const {name, description, platforms, image, released, rating, genres} = req.body
  try {
    const newGame = await createGameController(name, description, platforms, image, released, rating, genres)
    res.status(201).send(newGame)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}








const modifyVideogame = (req, res) => {
  res.status(200).send("NIY: modificar videojuego")
}

const deleteVideogame = (req, res) => {
  res.status(200).send("NIY: borrar videojuego")
}

module.exports = {
    getVideogames,
    getVideogameById,
    createVideogame,
    modifyVideogame,
    deleteVideogame
}