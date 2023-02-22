import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import Paginate from "../Paginate/Paginate"
import style from "./CardsContainer.module.css"
import {getVideogames, filterByGenres, getGameGenres, filterByOrigin} from "../../redux/actions"
import { useEffect, useState } from "react"

const CardsContainer = () => {

    const dispatch = useDispatch()
    const videogames = useSelector(state=>state.videogames)
    const genres = useSelector((state)=> state.genres)
    

//paginado
const [page, setPage] = useState(1);
  const [gamesPerPage] = useState(15);
  const indexOfLastGame = page * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame);
  
 
  const pagination = (pageNumber) => {
    setPage(pageNumber);
  };

    useEffect(()=>{
        dispatch(getVideogames())
        dispatch(getGameGenres())
    },[dispatch])

//filtrar por generos
const handlerFilterByGenre = (event) => {
    event.preventDefault()
    dispatch(filterByGenres(event.target.value))
}

//filtrar por origen
const handlerFilterByOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value))
}


    return ( 

        <div className={style.container}>

            <div>
                <h6>Find videogames by genres: </h6>
                <select onChange={(event)=> handlerFilterByGenre(event)}>
                    <option value="All">All genres</option>
                    {genres?.map((genr)=> (
                        <option value={genr.name} key={genr.id}>{genr.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <h6>Find videogames by origin: </h6>
                <select onChange={(event)=>handlerFilterByOrigin(event)}>
                    <option value="All">All sources</option>
                    <option value="createdDB">DB</option>
                    <option value="created">API</option>
                </select>
            </div>

            <div className={style.container}>
                {
                    currentGames === "404" ? (
                        <div>
                            <h1>Videogame not found!</h1>
                        </div>
                    ) : 
            currentGames.map(game =>{
                return <Card
                key={game.id}
                image={game.image}
                name={game.name}
                genres={game.genres}
                id={game.id}
                />
            })
        }
            </div>

            <div>
                <Paginate
                gamesPerPage={gamesPerPage}
                videogames={videogames.length}
                pagination={pagination}
                currentPage={page}
                />
            </div>
            
        </div>
    )
}

export default CardsContainer;