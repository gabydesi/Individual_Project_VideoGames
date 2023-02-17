import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsContainer.module.css"

const CardsContainer = () => {

    

    const videogames = useSelector(state=>state.videogames)

    return ( 
        <div className={style.container}>
            {videogames.map(game =>{
                return <Card
                    key={game.id}
                    id={game.id}
                    image={game.image}
                    name={game.name}
                    genres={game.genres}
                />
            })}
        </div>
    )
}

export default CardsContainer;