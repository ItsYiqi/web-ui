import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component{
    render(){
      return(
        <nav className="navbar navbar-expand-sm ">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a><button className="btn btn-outline-dark">Setting</button></a>
              </li>
              <li className="nav-item">
                <a href="/login"><button className="btn btn-outline-dark">Logout</button></a>
              </li>
            </ul>
          </div>
          {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
             <ul className="navbar-nav ml-auto">
                 <li className="nav-item">
                    <a href="/login"><button className="btn btn-outline-dark">LOGIN</button></a>
                 </li>
             </ul>
         </div> */}
        </nav>
      );
    }

}
