const {Router} = require("express")
const {
  getVideogames,
  getVideogameById,
  createVideogame,
  modifyVideogame,
  deleteVideogame
} = require("../handlers/videogameHandlers")

const videogamesRouter = Router();

videogamesRouter.get('/', getVideogames)

videogamesRouter.get('/:id', getVideogameById)

videogamesRouter.post('/', createVideogame)

videogamesRouter.put('/', modifyVideogame)

videogamesRouter.delete('/', deleteVideogame)

module.exports = videogamesRouter;