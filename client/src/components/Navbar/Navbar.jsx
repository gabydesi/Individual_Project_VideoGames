import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={style.mainContainer}>

            <Link to="/">Back to LandingPage provisional</Link>

            <Link>Home</Link>
            
            <Link to="/form">Create videogame</Link>

            <Searchbar/>
        </div>
    )
}

export default Navbar;