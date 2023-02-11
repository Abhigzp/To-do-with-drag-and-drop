
import './App.css';

import { Route, Routes } from "react-router-dom"
import Home from './components/home';

import List from './components/list';
import Task from './components/task';
import Navbar from './components/navbar';
import Board from './components/board';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/board" element={<Board/>} />
        <Route exact path="/list" element={<List/>}/>
        <Route exact path="/task" element={<Task/>}/>
      
     </Routes>

    </div>
  );
}

export default App;
