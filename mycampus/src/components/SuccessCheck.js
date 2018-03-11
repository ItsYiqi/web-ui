import React,{ Component } from 'react';


export default class SuccessCheck extends Component{
    render(){
      return(
        <div className="jumbotron create-success">
          <h1>CONGRULATIONS, MyCampus User</h1>
          <h2>You have successfully published your project!</h2>
          <hr className="my-6"/>
          <p className="lead">> You can access your project list through</p>
          <p className="lead">> Visualize your published project</p>
        </div>
      );
    }

}
