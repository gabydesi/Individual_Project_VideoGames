import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getGameGenres} from "../../redux/actions"
import axios from "axios";
import validation from "./validation";
import style from "./Form.module.css"
import Navbartwo from "../Navbartwo/Navbartwo";

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

    const [errors, setErrors] = useState({})

    //añadir datos en el input
    const changeHandler = (event) => {
        setErrors(validation({...form, [event.target.name]:event.target.value}))
        setForm({
            ...form, 
            [event.target.name]:event.target.value})
    }

    //opción de elección de géneros
    const handlerSelect = (event) => {
        if (!form.genres.includes(event.target.value)) {
          setForm({
            ...form,
            genres: [...form.genres, event.target.value],
          });
        }
      };

    //borrar generos seleccionados
    const deleteGenresHandler = (event) => {
        event.preventDefault()
        form.genres.map(element => console.log(element))
        setForm({
            ...form,
            genres: form.genres.filter((element) => event.target.id !== element)
        })
    }

    //opción de elección de plataformas
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
        setTimeout(()=>{
            window.location.reload();
          }, 3000)
        }



    return (
        <div className={style.form_back}>

            <Navbartwo/>
           
            <h2>Let's create a new Videogame for our database:</h2>
            
            
            <form className={style.container} onSubmit={handlerSubmit}>
                <div>
                    <div>
                    <label >Add a name: </label>
                    <input  className={style.form_input} type="text" name="name" value={form.name} onChange={changeHandler} 
                    minLength="5" maxLength="20" required/>
                    {errors.name ? <span className={style.error_message}>{errors.name}</span> : null}
                    </div>

                    <div>
                    <label>Launch date was in: </label>
                    <input type="date" name="released" value={form.released} placeholder="dd-mm-yyyy" 
                    min="1990-01-01" max="2023-12-31"
                    onChange={changeHandler} required/>
                    {errors.released ? <span className={style.error_message}>{errors.released}</span> : null}
                    </div>

                    <div>
                    <label form="points" >How many points do you give it: </label>
                    <input type="number" name="rating" value={form.rating} id="points" min="1" max="5"
                    onChange={changeHandler} required/>
                    {errors.rating ? <span className={style.error_message}>{errors.rating}</span> : null}
                    </div>

                    <div>
                    <label>Add an image URL, or you can leave the space blank:</label>
                    <input type="text" name="image" value={form.image} onChange={changeHandler}/>
                    </div>

                    <div>
                    <label>Made a little description about the game: </label>
                    <input type="text" name="description" minLength="10" maxLength="200" value={form.description} onChange={changeHandler} required/>
                    {errors.description ? <span className={style.error_message}>{errors.description}</span> : null}
                    </div>

                    <div>
                    <label>On which platforms can be played: </label>
                    {gamePlatforms.map((plat) => (
                        <div key={plat}>
										<label name={plat}>{plat}</label>
										<input type='checkbox' name='platforms' value={plat} onChange={handlerCheck}></input>
									</div>
								))}
                        {errors.platforms ? <span className={style.error_message}>{errors.platforms}</span> : null}
                    </div>
                    
                    <div>
                    <label>The genres types are: </label>
                    <select name="genres" onChange={handlerSelect} id="" value={form.genres.join("")}>
                        {/* {gameGenres.map((genr)=>{
                            return(
                                    <option key={genr.id} value={genr.name}>{genr.name}</option>  
                            )
                        })} */}
                        <option value="Empty">Choose a genre</option>
                        {gameGenres.map((genre)=>(
                            <option key={genre.id} value={genre.name}>{genre.name}</option>
                        ))}
                    </select>
                    
                    <div>
                        <span>Genres selected: </span>
                    </div>

                    <div>
                        {form.genres.map((element)=>(
                            <div>
                                <span>{element}</span>
                                <button onClick={deleteGenresHandler} id={element}>x</button>
                            </div>
                        ))}
                    </div>

                    {errors.genres ? <span className={style.error_message}>{errors.genres}</span> : null}
                    </div>

                    <div>
                    <button 
                    type="submit"
                    disabled={!form.name || !form.released || !form.rating || !form.description || form.platforms.length === 0 || form.genres.length === 0}
                    
                    >Create</button>
                    </div>
                    
                    
                   
                </div>
            </form>

        </div>
    )
}

export default Form;