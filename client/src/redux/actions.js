import axios from "axios"

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const GET_GAME_DETAIL = "GET_GAME_DETAIL"
export const GET_GAME_GENRES = "GET_GAME_GENRES"
export const SEARCH_GAME = "SEARCH_GAME"
export const FILTER_BY_GENRES = "FILTER_BY_GENRES"
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN"
export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER"
export const RATING_ORDER = "RATING_ORDER"
export const RESET = "RESET"



export function getVideogames(){
    return async function(dispatch){
        try {
            const gamesData = await axios.get("http://localhost:3001/videogames")
            dispatch({
                type: GET_VIDEOGAMES,
                payload: gamesData.data
            })
        } catch (error) {
            console.log(error.message)
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

export function searchGame(name){
    return async(dispatch)=>{
        try {
            let vgName = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            if(!vgName) throw Error
            return dispatch({
                type: SEARCH_GAME,
                payload: vgName.data //es lo q devuelve la ruta una vez q le asigno algo por name
            })
        } catch (error) {
            dispatch({
                type: SEARCH_GAME,
                payload: "404"
            })
        }
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

export const resetAll = () => {
    return (dispatch) => {
      dispatch({
        type: RESET,
      });
    };
  };

//filtrado y ordenamiento

//filtrar por género
export function filterByGenres(payload){
    return{
        type: FILTER_BY_GENRES,
        payload,
    }
}

//filtrar por origen es de la API o de la base de datos
export function filterByOrigin(payload){
    return{
        type:FILTER_BY_ORIGIN,
        payload
    }
}

//ordenar tanto ascendentemente como descendentemente por orden alfabético
export function alphabeticalOrder(payload){
    return{
        type:ALPHABETICAL_ORDER,
        payload
    }
}

//ordenar tanto ascendentemente como descendentemente por rating
export function ratingOrder(payload){
    return{
        type: RATING_ORDER,
        payload
    }
}



