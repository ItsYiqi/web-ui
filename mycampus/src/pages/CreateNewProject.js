import React,{ Component } from 'react';
import Navbar from '../components/Navbar';
import LoginNavbar from '../components/LoginNavbar';
import SubLoginNavbar from '../components/SubLoginNavbar';
import NewProject from '../components/NewProject';
import CreateProject from '../components/CreateProject';

export default class CreateNewProject extends Component{
    render(){
      return(
        <div>
          <LoginNavbar/>
          <div className="jumbotron jumbotron-fluid container-create">
            <SubLoginNavbar/>
            <br/>
            <CreateProject/>
          </div>
        </div>
      );
    }

}
