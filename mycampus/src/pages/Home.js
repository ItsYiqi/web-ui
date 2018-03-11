import React,{ Component } from 'react';
import logo from "./logo.svg";
import Navbar from '../components/Navbar';

export default class Home extends Component{
    render(){
      return(
        <div>
          <Navbar/>
          <div id="logo-pos">
            <img src={logo} className="img-fluid" alt="Responsive image"/>
          </div>
          <div>
            <p className="intro-text">MyCampus is a “Crowdsourcing Platform” for University of Melbourne
          students to create, publish and share IoT projects.</p>
          </div>
          <div className="container container-fluid">
            <div className="laptop-wrapper" >
              <iframe width="560" height="315" src="https://www.youtube.com/embed/2ntAZ_iJVaQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            {/* <div className="row">
              <div className="col-12"> */}
            </div>
        </div>
      );
    }

}
