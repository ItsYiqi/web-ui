import React,{ Component } from 'react';
import NeedHelp from './NeedHelp';
import NewProject from './NewProject';
import ProjectLists from './ProjectLists';
import Templates from './Templates';

export default class CreateProject extends Component{
    render(){
      return(
        <div>
          <div className="row align-items-start">
            <div className="col-3">
              <NeedHelp/>
              <ProjectLists/>
            </div>
            <div className="col-8">
              <NewProject/>
            </div>
          </div>
        </div>
      );
    }

}
