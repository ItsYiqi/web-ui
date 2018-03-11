import React,{ Component } from 'react';

export default class Templates extends Component{
  render(){
    return(
      <div >
        <div className="card-deck mb-1 text-center">
          <div className="card box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">TemplateA</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title"></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Sensors + </li>
                <li>Simple Logic + </li>
                <li>Map Viz</li>
              </ul>
              <a href="/createproject" className="btn btn-lg btn-block btn-outline-primary">Get Started</a>
              <a href="#" className="btn btn-lg btn-block btn-primary">Preview</a>
            </div>
          </div>
          <div className="card box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">TemplateB</h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                <li>Mobile App + </li>
                <li>Simple Logic + </li>
                <li>Map Viz</li>
              </ul>
              <a href="/createproject" className="btn btn-lg btn-block btn-outline-primary">Get Started</a>
              <a href="#" className="btn btn-lg btn-block btn-primary">Preview</a>
            </div>
          </div>

          <div className="card box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">TemplateC</h4>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mt-3 mb-4">
                <li> Sensors + Mob App + </li>
                <li> External data source +</li>
                <li> Simple Logic + Map Viz</li>
              </ul>
              <a href="/createproject" className="btn btn-lg btn-block btn-outline-primary">Get Started</a>
              <a href="#" className="btn btn-lg btn-block btn-primary">Preview</a>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
