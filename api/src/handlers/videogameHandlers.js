
const  {
  getAllVideogamesController,
  getGameByNameController,
  getgameByIdController,
  createGameController
} = require('../controllers/videoGamesController')


const getVideogames = async(req,res)=>{
  const {name} = req.query
  try {
    const results = name ? await getGameByNameController(name) : await getAllVideogamesController()
    results.length ? res.status(200).json(results) : res.status(400).json("Error the name doesn't exist")
  } catch (error) {
    
  }
  
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
  const {name, platforms, image, released, rating, genres, description} = req.body
  try {
    await createGameController(name, platforms, image, released, rating, genres, description)
    res.status(201).json("Game created successfully")
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