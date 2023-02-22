import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getGameGenres} from "../../redux/actions"
import axios from "axios";

const Form = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGameGenres())
    },[dispatch])

    const gameGenres = useSelector(state => state.genres)

    const gamePlatforms = ['PC', 'Nintendo', 'Nintendo switch', 'Xbox Series', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox360']

    const [form, setForm] = useState({
        name:"",
        released:"",
        rating:"",
        image:"",
        description:"",
        platforms:[],
        genres:[],
    })

    //añadir datos en el input
    const changeHandler = (event) => {
        setForm({
            ...form, 
            [event.target.name]:event.target.value})
    }

    //opción de elección de géneros
    const handlerSelect = (event) => {
        setForm({
            ...form,
            genres:[form.genres, event.target.value]
        })
    }

    //opción de elección de plataformas, no estoy segura
    const handlerCheck = (event) => {
        const arr = form[event.target.name];
        setForm({
            ...form,
            platforms: arr.concat(event.target.value)
        })
    }

    //cargar datos en la DB
    const handlerSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/videogames/', form)
        .then(alert("Videogame created successfully, return home to see it!"))
        }


    return (
        <div>
            <Link to="/home">Let's back Home</Link>

            <h2>Let's create a new Videogame for our database:</h2>

            <form onSubmit={handlerSubmit}>
                <div>
                    <div>
                    <label>Add a name: </label>
                    <input type="text" name="name" value={form.name} onChange={changeHandler}  />
                    </div>

                    <div>
                    <label>Launch date was in: </label>
                    <input type="date" name="released" value={form.released} placeholder="dd-mm-yyyy" 
                    min="1990-01-01" max="2023-12-31"
                    onChange={changeHandler}/>
                    </div>

                    <div>
                    <label for="points">How many points do you give it: </label>
                    <input type="number" name="rating" value={form.rating} id="points" min="1" max="5"
                    onChange={changeHandler}/>
                    </div>

                    <div>
                    <label>Add an image URL, or you can leave the space blank:</label>
                    <input type="text" name="image" value={form.image} onChange={changeHandler}/>
                    </div>

                    <div>
                    <label>Made a little description about the game: </label>
                    <input type="text" name="description" value={form.description} onChange={changeHandler}/>
                    </div>

                    <div>
                    <label>On which platforms can be played: </label>
                    {gamePlatforms.map((plat) => (
                        <div key={plat}>
										<label name={plat}>{plat}</label>
										<input type='checkbox' name='platforms' value={plat} onChange={handlerCheck}></input>
									</div>
								))}
                    </div>
                    
                    <div>
                    <label>The genres types are: </label>
                    <select name="genres" onChange={(event)=> handlerSelect(event)}>
                        {gameGenres.map((genr)=>{
                            return(
                                <option key={genr.id} value={genr.name}>{genr.name}</option>
                            )
                        })}
                    </select>
                    </div>

                    <div>
                    <button type="submit">CREATE</button>
                    </div>
                    
                   
                </div>
            </form>

        </div>
    )
}

export default Form;