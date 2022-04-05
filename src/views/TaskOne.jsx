import { useState } from "react";

const TaskOne=()=>{
    const [str,setStr]=useState('');
    // const [strArr,setStrArr]=useState([])
    const strArr = [...str]
    return (<>
    <h1>Task One</h1>
    <input type="text" id="inp" value={str} onChange={(e)=>setStr(e.target.value)}/>
    <div className='movie-cards'>
       {
        <div className='movie-items'>
          <h2>{str}</h2>
          <span className="string-row">
          {
              strArr.map((e,index)=>( <><h5>{`${e}-${index+1} ,`}</h5></>))
          }
          </span>
    </div>
       }
      
     </div>
    </>)
}
export default TaskOne;