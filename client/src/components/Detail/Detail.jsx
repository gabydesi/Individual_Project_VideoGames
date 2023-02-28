import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getGameDetail} from "../../redux/actions"
import style from './Detail.module.css'

import Navbartwo from "../Navbartwo/Navbartwo"


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

            <Navbartwo/>
            
            <div className={style.container}>
            <h1>{detail.name}</h1>
            <img src={detail.image} alt="" className={style.imageSize}/>
            <h3>Genres: {detail.genres.join(", ")}</h3>
            <h4>Launch date: {detail.released}</h4>
            <h4>Rating: {detail.rating}</h4>
            <h4>Platforms where you can play this game:</h4>
            <p>{detail.platforms.join(", ")}</p>
            <h4>About this game: </h4>
            <p className={style.description}>{detail.description}</p>
            </div>


            

            
            
        </div>
    )
}

export default Detail;