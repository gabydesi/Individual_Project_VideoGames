const {getGamesGenres} = require("../controllers/genresControllers")


const getGenres = async(req,res)=>{
  try {
    const gamesGenres = await getGamesGenres()
    res.status(200).send(gamesGenres)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  }

  module.exports = {
    getGenres
  }