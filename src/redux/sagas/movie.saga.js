import {all ,takeEvery,put,fork, call} from 'redux-saga/effects';
import apiServices from '../../apiHelper/api';
import { GET_MOIVE_BY_TITLE, GET_MOIVE_BY_TITLE_SUCCESS, GET_MOVIES, GET_MOVIES_SUCCESS } from '../action.type/movie.type';
function* GetAllMovies(){
    console.log("hello")
    yield takeEvery(GET_MOVIES,function*(payload){
       const data= yield call(apiServices.getMovies)
       yield put({type:GET_MOVIES_SUCCESS,payload:data.data})
    })
}

function* GetMovieByTitle(){
    yield takeEvery(GET_MOIVE_BY_TITLE,function*(payload){
        console.log(payload)
        const data=yield call(apiServices.getMovieByTitles,payload.payload)
        console.log(data)
        yield put({type:GET_MOIVE_BY_TITLE_SUCCESS,payload:data})
    })
}
export default function* MovieSaga(){
   yield all([
       fork(GetAllMovies),
       fork(GetMovieByTitle),
   ])
}