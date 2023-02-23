import style from "./Card.module.css"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { deleteVideogame, getVideogames } from "../../redux/actions"



const Card = (props) => {
    
    const dispatch = useDispatch()

  const handlerDelete = () => {
    dispatch(deleteVideogame(props.id))
    dispatch(getVideogames())
  }

    return ( 
        <div className={style.card}>

            <div>
                <button onClick={handlerDelete}>X</button>
            </div>
            
            <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.name} height="190px" width="190px"/>
            <h3>{props.name}</h3>
            <h5>{props.genres.join(" - ")}</h5>
            </Link>

        </div>
    )
}

export default Card;