import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ViewMovie from './views/ViewMovie';
import TaskTwo from './views/TaskTwo';
import TaskOne from './views/TaskOne';
import TaskThree from './views/TaskThree';
import Navbar from './components/navbar';
import ViewStock from './views/ViewStock';
function App() {
  
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
       <Routes>
         <Route exact path='/' element={<TaskOne/>} />
          <Route exact path='/TaskTwo' element={<TaskTwo/>}/>
          <Route exact path='/TaskThree' element={<TaskThree/>}/>
          <Route exact path='/viewmovie/:query' element={<ViewMovie/>}/>
          <Route exact path='/viewstock/:date' element={<ViewStock/>} />
       </Routes>
      </Router>
      {/* <Movie/> */}
    </div>
  );
}

export default App;
