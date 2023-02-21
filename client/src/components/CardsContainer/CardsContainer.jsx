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
                    image={game.image}
                    name={game.name}
                    genres={game.genres}
                    id={game.id}
                />
            })}
        </div>
    )
}

export default CardsContainer;