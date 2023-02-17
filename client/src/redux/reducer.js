import {GET_VIDEOGAMES, GET_GAME_DETAIL} from './actions'

const initialState = {
    videogames: [],
    allgames:[],
    detail: {},
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
        default:
            return {...state}
    }
}

export default rootReducer;