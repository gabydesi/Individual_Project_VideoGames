import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"
import landingVideo from "./landingVideo.mp4"
import startButton from "../images/startButton.png"
import Footer from "../Footer/Footer";

const LandingPage = () => {
    return (
        <div>
            
            <video src={landingVideo}autoplay="true" muted="true" loop="true" 
             className={style.landingVideo}>
            </video>

            <Link to="/home">
                <img className={style.start} src={startButton} alt="" />
            </Link>

            <Footer/>
        </div>
    )
}

export default LandingPage;