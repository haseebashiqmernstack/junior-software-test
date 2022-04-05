import { GET_STOCK, GET_STOCK_BY_DATE } from "../action.type/stock.type";

export const GetStocks=()=>({
    type:GET_STOCK,
    payload:''
})

export const getStockByDate=(date)=>({
    type:GET_STOCK_BY_DATE,
    payload:date
})