import React,{ Component } from 'react';
import Loginbox from '../components/Loginbox';
import logo from "./logo.svg";

export default class Login extends Component{
    render(){
      return(
        <div>
          <div id="logo-pos">
            <a href="/">
              <img src={logo} className="rounded mx-auto d-block" alt="Responsive image" />
            </a>
          </div>
          <div className="jumbotron" id="login-box">
            <Loginbox/>
          </div>
          {this.props.children}



        </div>
      );
    }

}
