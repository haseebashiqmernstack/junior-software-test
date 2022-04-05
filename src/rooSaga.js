import { all } from "redux-saga/effects";
import MovieSaga from "./redux/sagas/movie.saga";
import StockSaga from "./redux/sagas/stock.saga";

export default function* RootSaga()
{
    yield all([
        MovieSaga(),
        StockSaga(),
    ])
}