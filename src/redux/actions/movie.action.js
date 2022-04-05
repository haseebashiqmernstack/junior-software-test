import { GET_MOIVE_BY_TITLE, GET_MOVIES } from "../action.type/movie.type";

export const GetMovies=()=>({
    type:GET_MOVIES,
    payload:''
})
export const GetMovieByTitle=(title)=>({
    type:GET_MOIVE_BY_TITLE,
    payload:title
})