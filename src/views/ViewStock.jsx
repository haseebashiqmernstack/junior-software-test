import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getStockByDate } from "../redux/actions/stock.action";

const ViewStock=()=>{
const dispatch=useDispatch();
const stock=useSelector(state => state.Stock);
const params=useParams();
useEffect(()=>{
    console.log(params.date)
dispatch(getStockByDate(params.date));
},[params.date]);
return (<>
    <div className='stock-cards'>
       
       {
           stock.stock_by_date.map(d=> (
               <>
               <div className='stock-items'>
          <h2>{d.date}</h2>
          <span className="info-data">
          <h4>Open:{d.open}</h4>
          <h4>Hight:{d.high}</h4>
          <h4>Low:{d.low}</h4>
          <h4>Close:{d.close}</h4>
          </span>
    </div>
               </>
           ))
       }
        
      
     </div>
    </>)
}
export default ViewStock;