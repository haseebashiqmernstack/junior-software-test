import { GET_STOCK_BY_DATE_SUCCESS, GET_STOCK_SUCCESS } from "../action.type/stock.type"

const initial={
    stock:[],
    stock_by_date:[]
}

const StockReducer=(state=initial,action)=>{
    switch(action.type)
    {
        case GET_STOCK_SUCCESS:
            return {
                ...state,
                stock:[...action.payload]
            }
            case GET_STOCK_BY_DATE_SUCCESS:
                console.log("from reducer ", ...action.payload)
                return {
                    ...state,
                    stock_by_date:[...action.payload]
                }
            default:
                return state;
    }

}
export default StockReducer;