import Navbar from "../Navbar/Navbar";
import CardsContainer from "../CardsContainer/CardsContainer";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getVideogames, } from "../../redux/actions"
import style from './Home.modules.css'


const Home = () => {

    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch])
    
    return (
        <div className={style.home_back}>

            <Navbar/>

            <CardsContainer/>

            <Footer/>

        </div>
    )
}

export default Home;