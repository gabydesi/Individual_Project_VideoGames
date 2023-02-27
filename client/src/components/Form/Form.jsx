import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getGameGenres} from "../../redux/actions"
import axios from "axios";
import validation from "./validation";
import style from "./Form.module.css"
import logotwo from "../images/logotwo.png"

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
        }


    return (
        <div className={style.form_back}>
           
            <h2>Let's create a new Videogame for our database:</h2>

            <div>
                        <img src={logotwo} alt="" className={style.logo} />
                    </div>
            
            
            <form className={style.container} onSubmit={handlerSubmit}>
                <div>
                    <div>
                    <label >Add a name: </label>
                    <input  className={style.form_input} type="text" name="name" value={form.name} onChange={changeHandler} minlength="5" maxlength="20" required/>
                    {errors.name ? <span>{errors.name}</span> : null}
                    </div>

                    <div>
                    <label>Launch date was in: </label>
                    <input type="date" name="released" value={form.released} placeholder="dd-mm-yyyy" 
                    min="1990-01-01" max="2023-12-31"
                    onChange={changeHandler} required/>
                    {errors.released ? <span>{errors.released}</span> : null}
                    </div>

                    <div>
                    <label form="points" >How many points do you give it: </label>
                    <input type="number" name="rating" value={form.rating} id="points" min="1" max="5"
                    onChange={changeHandler} required/>
                    {errors.rating ? <span>{errors.rating}</span> : null}
                    </div>

                    <div>
                    <label>Add an image URL, or you can leave the space blank:</label>
                    <input type="text" name="image" value={form.image} onChange={changeHandler}/>
                    </div>

                    <div>
                    <label>Made a little description about the game: </label>
                    <input type="text" name="description" minlength="10" maxlength="200" value={form.description} onChange={changeHandler} required/>
                    {errors.description ? <span>{errors.description}</span> : null}
                    </div>

                    <div>
                    <label>On which platforms can be played: </label>
                    {gamePlatforms.map((plat) => (
                        <div key={plat}>
										<label name={plat}>{plat}</label>
										<input type='checkbox' name='platforms' value={plat} onChange={handlerCheck}></input>
									</div>
								))}
                        {errors.platforms ? <span>{errors.platforms}</span> : null}
                    </div>
                    
                    <div>
                    <label>The genres types are: </label>
                    <select name="genres" onChange={handlerSelect} id="" value={form.genres.join("")}>
                        {gameGenres.map((genr)=>{
                            return(
                                <option key={genr.id} value={genr.name}>{genr.name}</option>
                            )
                        })}
                    </select>
                    {errors.genres ? <span>{errors.genres}</span> : null}
                    </div>

                    <div>
                    <button 
                    type="submit"
                    disabled={!form.name || !form.released || !form.rating || !form.description || !form.platforms || !form.genres}
                    
                    >Create</button>
                    </div>

                    <div>
            <br />
            <br />
            <Link className={style.button} to="/home">Back Home</Link>
            </div>
                    
                    
                   
                </div>
            </form>

        </div>
    )
}

export default Form;