const {getGamesGenres} = require("../controllers/genresControllers")



const getGenres = async (req, res) => {
  try {
    const allGenres = await getGamesGenres()
    res.status(200).json(allGenres);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching genres");
  }
};

  module.exports = {
    getGenres
  }