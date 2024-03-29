import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import style from "./Navbar.module.css"
import logotwo from "../images/logotwo.png"

const Navbar = () => {
    return (
        <div className={style.mainContainer}>

            <Link to="/">
                <img className={style.logo} src={logotwo} alt=""/>
            </Link>
            
            <Link className={style.button} to="/form">Create a new videogame</Link>


            <div className={style.mainContainer}>
            <Searchbar/>
            </div>
        </div>
    )
}

export default Navbar;