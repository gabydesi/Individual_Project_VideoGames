import Navbar from "../Navbar/Navbar";
import CardsContainer from "../CardsContainer/CardsContainer";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getVideogames} from "../../redux/actions"


const Home = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch])
    
    return (
        <div>

            <Navbar/>

            <h1>This will be the Cards view</h1>

            <CardsContainer/>

            <Footer/>

        </div>
    )
}

export default Home;