import React from "react";
import { Link, NavLink} from "react-router-dom";

const Navbar = () => {
  

 
  return (
    <div>
      
   
        <ul className="nav-ul ">
          <li ><NavLink style={{textDecoration:"none",color:"black",fontSize:"20px"}} to="/">Home </NavLink>  </li>
         
          <li> <NavLink  style={{textDecoration:"none",color:"black",fontSize:"20px"}}to="/board">Board </NavLink></li>
        
           <li ><NavLink  style={{textDecoration:"none",color:"black",fontSize:"20px"}}  to="/list">  List  </NavLink>  </li>
            <li><NavLink  style={{textDecoration:"none",color:"black",fontSize:"20px"}}to="/task"> Create task</NavLink> </li>
            
        </ul>
  
      
     
    </div>
  );
};

export default Navbar;