import { GET_MOIVE_BY_TITLE_SUCCESS, GET_MOVIES_SUCCESS } from "../action.type/movie.type";

const initial={
    movies:[],
    movies_by_title:[]
}

export const MovieReducer=(state=initial,action)=>
{
    switch(action.type)
    {
        case GET_MOVIES_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                movies:[...action.payload].slice(0).sort((a,b) => a.Title - b.Title)
            }
            case GET_MOIVE_BY_TITLE_SUCCESS:
                   console.log("from reducer ",action.payload.data);
                return {
                      ...state,
                      movies_by_title:[...action.payload.data]
                }
        default:
        return state;
    }
}