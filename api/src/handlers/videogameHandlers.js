
const  {
  getAllVideogamesController,
  getGameByNameController,
  getgameByIdController,
  createGameController,
  deleteGameByIdController
} = require('../controllers/videoGamesController')


const getVideogames = async(req,res)=>{
  const {name} = req.query
  try {
    const results = name ? await getGameByNameController(name) : await getAllVideogamesController()
    
    results.length ? res.status(200).json(results) 
    : res.status(404).json("Error the name doesn't exist")
  } catch (error) {
    res.status(400).json({error: error.message})
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
    res.status(400).json({error: "The ID doesn't exist"})
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


const deleteVideogame = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.replace(/-/g, '') === id) {
      return res.status(400).json({ error: 'This videogame cannot be deleted' });
    }
    await deleteGameByIdController(id);
    res.status(200).json({ message: 'Game deleted successfully'});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
    getVideogames,
    getVideogameById,
    createVideogame,
    deleteVideogame
}