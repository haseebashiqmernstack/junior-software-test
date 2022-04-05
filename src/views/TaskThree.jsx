import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetStocks } from "../redux/actions/stock.action";
import {Link} from 'react-router-dom';
const TaskThree=()=>{
    const dispatch=useDispatch();
    const stock=useSelector(state=>state.Stock);
    useEffect(()=>{
         dispatch(GetStocks());
    },[])
    return (<>
    <h1>Task Three</h1>
    <div className='stock-cards'>
       {
         stock.stock.map((s,index)=> (
        <>
        <Link to={`/viewstock/${s.date}`}>
        <div className='stock-items' key={index}>
          <h2>{s.date}</h2>
    </div>
    </Link>
    </>
         ))
       }
      
     </div>
    </>)
}
export default TaskThree;