import { Link } from "react-router-dom";
import { useState } from "react";

const Form = () => {

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
        setForm({...form, [event.target.name]:event.target.value})
    }


    return (
        <div>
            <Link to="/home">Let's back Home</Link>

            <h2>Let's create a new Videogame for our database:</h2>

            <form>
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
                    <input type="checkbox"/>
                    </div>
                    
                    <div>
                    <label>The genres types are:</label>
                    <select>Genres</select>
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