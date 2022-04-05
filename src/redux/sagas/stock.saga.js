import {all,fork,takeEvery,put,call} from 'redux-saga/effects';
import { GET_STOCK, GET_STOCK_BY_DATE, GET_STOCK_BY_DATE_SUCCESS, GET_STOCK_SUCCESS } from '../action.type/stock.type';
import apiServices from '../../apiHelper/api';
function* GetAllStocks()
{
    yield takeEvery(GET_STOCK,function*(payload){
        const data=yield call(apiServices.getAllStack)
        yield put({type:GET_STOCK_SUCCESS,payload:data.data})
        // console.log(data.data);
    })
}
function* GetStockByDate()
{
    yield takeEvery(GET_STOCK_BY_DATE,function*(payload){
         const data=yield call(apiServices.getStockByDate,payload.payload)
         yield put({type:GET_STOCK_BY_DATE_SUCCESS,payload:data.data})
    })
}
export default function* StockSaga()
{
   yield all([
        fork(GetAllStocks),
        fork(GetStockByDate)
    ])
}