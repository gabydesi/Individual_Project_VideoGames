import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getGameDetail} from "../../redux/actions"
import style from './Detail.modules.css'

const Detail = () => {

    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(()=>{
        dispatch(getGameDetail(id))
        
    },[dispatch, id])

    const detail = useSelector((state) => state.detail)
   
    dispatch({type: "reset"})
    
    if(!detail.id) {
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

        return (
            <div className={style.detail_back}>
            <Link to="/home">Let's back Home</Link>
            
            <h1>{detail.name}</h1>
            <img src={detail.image} alt="" className={style.imageSize}/>
            <h3>Genres: {detail.genres.join(", ")}</h3>
            <h3>Launch date: {detail.released}</h3>
            <h3>Rating: {detail.rating}</h3>
            <h3>Platforms where you can play: {detail.platforms.join(", ")}</h3>
            <h3>About this game: {detail.description}</h3>
            
        </div>
    )
}

export default Detail;