import { useState } from "react";
import {searchGame} from "../../redux/actions"
import { useDispatch } from "react-redux";


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
            
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search videogames by name..." onChange={handleChange} value={gameName}/>
                    <input type="submit" value="FIND"/>
                </form>
            
        </div>
    )
}

export default Searchbar;