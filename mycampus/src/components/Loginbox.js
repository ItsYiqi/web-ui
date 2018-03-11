import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

export default class Loginbox extends Component{
    render(){
      return(
        <div className="loginbox">
          <button className="btn btn-block btn-social btn-google bt-sm login-font">
            <i className="fa fa-google "></i> Login with Google
          </button>
          <button className="btn btn-block btn-social btn-facebook bt-sm login-font">
            <i className="fa fa-facebook "></i> Login with Facebook
          </button>
          <button className="btn btn-block btn-social btn-facebook bt-sm login-font" href="/login/account">
            <i className="fa fa-facebook "></i> Login with Unimelb
          </button>

        </div>


        /* // <div className="col2 login-border-left">
        //   <a className="btn btn-block btn-social btn-facebook btn-sm">
        //     <span className="fa fa-facebook"></span> Login in with Facebook
        //   </a>
        //   <a className="btn btn-block btn-social btn-google btn-sm">
        //     <span className="fa fa-google"></span> Login with Google
        //   </a>
        //   <a className="btn btn-block btn-social btn-google btn-sm" href="/account">
        //     <span className="fa fa-google"></span> Login with Unimelb
        //   </a>
        // </div> */

      );
    }

}
