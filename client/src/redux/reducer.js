import {GET_VIDEOGAMES, GET_GAME_DETAIL, GET_GAME_GENRES, SEARCH_GAME, FILTER_BY_GENRES, FILTER_BY_ORIGIN, ALPHABETICAL_ORDER, RATING_ORDER, RESET} from './actions'

const initialState = {
    videogames: [],
    allgames:[],
    detail: {},
    genres:[]
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_VIDEOGAMES:
            return{
                ...state,
                videogames: action.payload,
                allgames: action.payload,
               
            }
        case GET_GAME_DETAIL:
            return{
                ...state,
                allgames: action.payload,
                detail: action.payload,
            }
        case RESET:
            return {
                ...state,
                videogames: [],
                allgames:[],
                detail: {},
                genres:[]
      }
        case GET_GAME_GENRES:
            return{
                ...state,
                genres:action.payload
            }
        case SEARCH_GAME:
            return{
                ...state,
                videogames:action.payload
            }
        case FILTER_BY_GENRES:
            let allGamesGenres = state.allgames

            if(action.payload !== "All") {
                allGamesGenres = allGamesGenres.filter((genr)=> genr.genres.includes(action.payload))
            }
            return{
                ...state,
                videogames: allGamesGenres
            }
        case FILTER_BY_ORIGIN:
            let gamesOrigin = state.allgames
            let originFilter = action.payload === "createdDB" ? 
            gamesOrigin.filter(element => element.createdDB === true) :
            gamesOrigin.filter(element => !element.createdDB)
            return{
                ...state,
                videogames: originFilter
            }
        case ALPHABETICAL_ORDER:
            let sortedGames = state.videogames
            if(action.payload === "asc"){
                sortedGames = sortedGames.sort((a, b) => {
                    if(a.name > b.name){return 1}
                    if(b.name > a.name){return -1}
                    return 0
                })
            }else{
                sortedGames = sortedGames.sort((a, b) => {
                    if(a.name > b.name){return -1}
                    if(b.name > a.name){return 1}
                    return 0
                })
            }
            return{
                ...state,
                videogames: sortedGames
            }
        case RATING_ORDER: 
        const sortedRating = action.payload === 'asc' ?
        [...state.allgames].sort(function (a, b) {
            if(a.rating === null) { return 0 }
            if (a.rating < b.rating) { return 1 }
            if (b.rating < a.rating) { return -1 }
            return 0;
        }) :
        [...state.allgames].sort(function (a, b) {
            if(a.rating === null) { return 0 }
            if (a.rating < b.rating) { return -1; }
            if (b.rating < a.rating) { return 1; }
            return 0;
        })
            return{
                ...state,
                videogames: sortedRating
            }
        
        
        default:
            return {...state}
    }
}

export default rootReducer;