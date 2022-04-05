import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovies } from '../redux/actions/movie.action';
import './style.css';
import {Link} from 'react-router-dom';
const TaskTwo=()=>{
const dispatch=useDispatch();
const movie=useSelector(state=>state.Movie);
useEffect(()=>{
   dispatch(GetMovies());
},[])
    return (<>
     <h1>Task Two</h1>
    <div className='movie-cards'>
       {
         movie.movies.map((m,index)=> (
        <>
        <Link to={`/viewmovie/${m.Title}`}>
        <div className='movie-items' key={index}>
          <h2>{m.Title}</h2>
    </div>
    </Link>
    </>
         ))
       }
      
     </div>
    </>)
}
export default TaskTwo;