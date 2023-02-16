import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.mainContainer}>

            <Link to="/">Back to LandingPage provisional</Link>

            <h3>Home</h3>
            
            <Link to="/form">Let's create a new Videogame</Link>

            <Searchbar/>
        </div>
    )
}

export default Navbar;