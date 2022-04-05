import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetMovieByTitle } from "../redux/actions/movie.action";
import {Link} from 'react-router-dom';

const ViewMovie=(props)=>{
    const params=useParams();
    const dispatch=useDispatch();
    const movie=useSelector(state=>state.Movie);
useEffect(()=>{
dispatch(GetMovieByTitle(params.query));
},[])
return (<>
 <div className='movie-cards'>
       {
         movie.movies_by_title.map((m,index)=> (
        <>
       
        <div className='movie-items' key={index}>
          <h2>{m.Title}</h2>
    </div>
    </>
         ))
       }
      
     </div>
    
    <h1></h1>
    </>)
}
export default ViewMovie;