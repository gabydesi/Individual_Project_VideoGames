import {GET_VIDEOGAMES, GET_GAME_DETAIL, GET_GAME_GENRES, SEARCH_GAME} from './actions'

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
       
        
        default:
            return {...state}
    }
}

export default rootReducer;