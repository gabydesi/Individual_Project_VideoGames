const  {
  //getAllGames,
  //getVideogamesByName,
  createGameController
} = require('../controllers/videoGamesController')

const getVideogames = async(req,res)=>{
  const {name} = req.query

  if(name) res.status(200).send(`NIY: Aquí veré los VG de nombre ${name}`)
  else res.status(200).send(`NIY: Aquí veré todos los VG`)
  // const {name} = req.query;
  // try {
  //   const results = name ? await getVideogamesByName(name) : await getAllGames()
  //   results.length 
  //   ? res.status(200).json(results.splice(0, 14))
  //   : res.status(404).json({message: "Error"})
  // } catch (error) {
  //   res.status(400).json({error: error.message})
  // }
}
  
const getVideogameById = (req,res)=>{
  const {id} = req.params;
  res.status(200).send(`NIY: Aquí veré el detalle de cada videojuego según el ID ${id}`)
}  




const createVideogame = async(req, res) => {
  
  const {name, description, platforms, image, released, rating, genres} = req.body
  
  try {
    const newGame = await createGameController(name, description, platforms, image, released, rating, genres)
    res.status(201).json(newGame)
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