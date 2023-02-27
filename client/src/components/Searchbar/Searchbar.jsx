import { useState } from "react";
import {searchGame} from "../../redux/actions"
import { useDispatch } from "react-redux";
import style from "./Searchbar.module.css"


//función para buscar los juegos por nombre
const Searchbar = () => {

    const dispatch = useDispatch('')

    const [gameName, setGameName] = useState('')

    const handleChange = (event) => {
        setGameName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(searchGame(gameName))
    }

    return (
        <div>
            
                <form className={style.searchBarObject} onSubmit={handleSubmit}>
                    <input className={style.input} type="text" placeholder="Search videogames by name..." size="30" onChange={handleChange} value={gameName}/>
                    <input className={style.button} type="submit" value="Search"/>
                </form>
            
        </div>
    )
}

export default Searchbar;