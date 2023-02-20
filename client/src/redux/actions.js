import axios from "axios"

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const GET_GAME_DETAIL = "GET_GAME_DETAIL"
export const GET_GAME_GENRES = "GET_GAME_GENRES"

export function getVideogames(){
    return async function(dispatch){
        try {
            const gamesData = await axios.get("http://localhost:3001/videogames")
            dispatch({
                type: GET_VIDEOGAMES,
                payload: gamesData.data
            })
        } catch (error) {
            dispatch({ type: GET_VIDEOGAMES,
                payload: "Error 404"})
        }
    }
}

export function getGameDetail(id){
    return async function(dispatch){
        await axios.get(`http://localhost:3001/videogames/${id}`).then((res) => 
        dispatch({
            type:GET_GAME_DETAIL,
            payload: res.data
        }))
    }
}

export function getGameGenres(){
    return function(dispatch){
        axios.get("http://localhost:3001/genres").then((res) =>
        dispatch({
            type:GET_GAME_GENRES,
            payload: res.data
        }))
    }
}

