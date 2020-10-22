import React, { Fragment } from 'react'
import {
  NavLink
} from "react-router-dom";


export const Nav = ()=>{

return(

    <Fragment>
        
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">LOGO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>Tasks</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/task/create">New Task</NavLink>
      </li>
  
    </ul>
    
  </div>
 
</nav>
    </Fragment>


)



}