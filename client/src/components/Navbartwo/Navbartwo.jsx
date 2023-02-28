import style from "./Navbartwo.module.css"
import logotwo from "../images/logotwo.png" 
import { Link } from "react-router-dom";

const Navbartwo = () => {
    return(
        <div className={style.container}>

            <div>
            <Link className={style.button} to="/home">Back Home</Link>
            </div>

            <div>
                <img className={style.logo} src={logotwo} alt=""/>
            </div>

            

        </div>
    )
}

export default Navbartwo;