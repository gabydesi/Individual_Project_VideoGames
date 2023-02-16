import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h2>This is going to be the landing page</h2>
            <Link to="/home">Let's GO HOME</Link>
        </div>
    )
}

export default LandingPage;