import React,{ Component } from 'react';

export default class NeedHelp extends Component{
    render(){
      return(
          <div className="jumbotron ">
              <button type="button" className="btn btn-dark">Need Help?</button>
              <br/>
              <p>Add Sensor ></p>
              <p>Visualize Data ></p>
              <p>Pulish project ></p>
          </div>
      );
    }

}
