import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {

    const videogames = [{
        "id": 3498,
        "name": "Grand Theft Auto V",
        "platforms": [
            "PlayStation 5",
            "Xbox Series S/X",
            "PlayStation 4",
            "PC",
            "PlayStation 3",
            "Xbox 360",
            "Xbox One"
        ],
        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "released": "2013-09-17",
        "rating": 4.47,
        "genres": "Action,Adventure",
        "createdDB": false
    },
    {
        "id": 3328,
        "name": "The Witcher 3: Wild Hunt",
        "platforms": [
            "Xbox Series S/X",
            "PlayStation 4",
            "Nintendo Switch",
            "PC",
            "Xbox One",
            "PlayStation 5"
        ],
        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "released": "2015-05-18",
        "rating": 4.66,
        "genres": "Action,Adventure,RPG",
        "createdDB": false
    },
    {
        "id": 4200,
        "name": "Portal 2",
        "platforms": [
            "Xbox 360",
            "Linux",
            "macOS",
            "PlayStation 3",
            "PC",
            "Xbox One"
        ],
        "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "released": "2011-04-18",
        "rating": 4.62,
        "genres": "Shooter,Puzzle",
        "createdDB": false
    },
    {
        "id": 5286,
        "name": "Tomb Raider (2013)",
        "platforms": [
            "PlayStation 4",
            "macOS",
            "PC",
            "Xbox One",
            "Xbox 360",
            "PlayStation 3"
        ],
        "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "released": "2013-03-05",
        "rating": 4.05,
        "genres": "Action,Adventure",
        "createdDB": false
    },
    {
        "id": 4291,
        "name": "Counter-Strike: Global Offensive",
        "platforms": [
            "PC",
            "Xbox 360",
            "PlayStation 3"
        ],
        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "released": "2012-08-21",
        "rating": 3.56,
        "genres": "Action,Shooter",
        "createdDB": false
    },
    {
        "id": 13536,
        "name": "Portal",
        "platforms": [
            "Android",
            "PlayStation 3",
            "Xbox 360",
            "Linux",
            "macOS",
            "PC",
            "Nintendo Switch"
        ],
        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "released": "2007-10-09",
        "rating": 4.51,
        "genres": "Adventure,Puzzle",
        "createdDB": false
    },
    {
        "id": 12020,
        "name": "Left 4 Dead 2",
        "platforms": [
            "macOS",
            "Linux",
            "PC",
            "Xbox 360"
        ],
        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "released": "2009-11-17",
        "rating": 4.09,
        "genres": "Action,Shooter",
        "createdDB": false
    },
    {
        "id": 5679,
        "name": "The Elder Scrolls V: Skyrim",
        "platforms": [
            "PC",
            "Nintendo Switch",
            "Xbox 360",
            "PlayStation 3"
        ],
        "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        "released": "2011-11-11",
        "rating": 4.42,
        "genres": "Action,RPG",
        "createdDB": false
    },
    {
        "id": 4062,
        "name": "BioShock Infinite",
        "platforms": [
            "PlayStation 4",
            "Xbox 360",
            "Nintendo Switch",
            "Linux",
            "PC",
            "PlayStation 3",
            "Xbox One"
        ],
        "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        "released": "2013-03-26",
        "rating": 4.39,
        "genres": "Action,Shooter",
        "createdDB": false
    },
    {
        "id": 802,
        "name": "Borderlands 2",
        "platforms": [
            "PlayStation 3",
            "macOS",
            "PC",
            "Android",
            "Linux",
            "PS Vita",
            "Xbox 360"
        ],
        "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        "released": "2012-09-18",
        "rating": 4.02,
        "genres": "Action,Shooter,RPG",
        "createdDB": false
    }]

    //const videogames = useSelector(state=>state.videogames)

    return ( 
        <div className={style.container}>
            {videogames.map(game =>{
                return <Card
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