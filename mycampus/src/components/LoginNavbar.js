import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../pages/logo.svg";


export default class LoginNavbar extends Component{
    render(){
      return(
        <nav className="navbar navbar-expand-sm navbar-light ">
          {/* this line is for collapse */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img src={logo} alt=""/>
          </a>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a>HI MYCAMPUS USERS!</a>
              </li>
            </ul>
          </div> */}
          <div className="navbar-collapse collapse ">
             <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                   <p className="user-hi">Hi MyCampus User!</p>
                 </li>
             </ul>
         </div>
        </nav>
      );
    }

}
