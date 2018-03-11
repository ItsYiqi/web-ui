import React,{ Component } from 'react';
import logo from "./logo.svg";

export default class Account extends Component{
    render(){
      return(
        <div>
          <div id="logo-pos">
            <img src={logo} className="img-fluid" alt="Responsive image"/>
          </div>
          <div>
            <p className="intro-text">MyCampus is a “Crowdsourcing Platform” for University of Melbourne
          students to create, publish and share IoT projects.</p>
          </div>
        </div>
      );
    }

}
