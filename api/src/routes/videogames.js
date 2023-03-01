const {Router} = require("express")
const {
  getVideogames,
  getVideogameById,
  createVideogame,
  deleteVideogame
} = require("../handlers/videogameHandlers")

const videogamesRouter = Router();

videogamesRouter.get('/', getVideogames)

videogamesRouter.get('/:id', getVideogameById)

videogamesRouter.post('/', createVideogame)

videogamesRouter.delete('/:id', deleteVideogame)

module.exports = videogamesRouter;