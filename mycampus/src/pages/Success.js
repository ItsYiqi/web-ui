import React,{ Component } from 'react';
import Navbar from '../components/Navbar';
import LoginNavbar from '../components/LoginNavbar';
import SubLoginNavbar from '../components/SubLoginNavbar';
import CreateProject from '../components/CreateProject';
import ChooseTemplates from '../components/ChooseTemplates';
import SuccessCheck from '../components/SuccessCheck';


export default class Success extends Component{
    render(){
      return(
        <div>
          <LoginNavbar/>
          <div className="jumbotron jumbotron-fluid container-create">
            <SubLoginNavbar/>
            <br/>
            <SuccessCheck/>

          </div>
        </div>
      );
    }

}
