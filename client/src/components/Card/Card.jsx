import style from "./Card.module.css"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { deleteVideogame, getVideogames } from "../../redux/actions"




const Card = (props) => {
  const dispatch = useDispatch();
  const showDelete = props.id.toString().includes('-');

  const handlerDelete = () => {
    dispatch(deleteVideogame(props.id))
    dispatch(getVideogames())
    setTimeout(()=>{
      window.location.reload();
    }, 3000)
  }

  return ( 
    <div className={style.card}>
      {showDelete && (
        <div>
          <Link to="/home" className={style.trashCan} onClick={handlerDelete}>
            x
          </Link>
        </div>
      )}
      <Link to={`/detail/${props.id.toString()}`} className={style.card_img}>
        <img src={props.image} alt={props.name} height="190px" width="190px"/>
        <h3>{props.name}</h3>
        <h5>{props.genres.join(" - ")}</h5>
      </Link>
    </div>
  )
}

export default Card;