import style from "./Card.module.css"
import { Link } from 'react-router-dom'

const Card = (props) => {
    return ( 
        <div className={style.card}>
            <Link to="/detail">
            <img src={props.image} alt={props.name} height="190px" width="190px"/>
            <h3>{props.name}</h3>
            <h5>{props.genres}</h5>
            </Link>
        </div>
    )
}

export default Card;