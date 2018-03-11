import React,{ Component } from 'react';

export default class CreateProject extends Component{
    render(){
      return(
        <div>
          <h3>NEW PROJECT</h3>
          <form>
          <div className="form-group row">
            <label for="projectID" className="col-sm-2 col-form-label">Project ID</label>
            <div className="col-sm-4">
              <input type="text" readonly className="form-control-plaintext"  value="794380"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-4">
             <input type="text" className="form-control mb-1" id="inputPassword2" placeholder="Title for the project"/>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputDescription" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-4">
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputDescription" className="col-sm-2 col-form-label">Background Image</label>
            <div className="input-group col-sm-4">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputDescription" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-4">
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputDescription" className="col-sm-2 col-form-label">Add Elements</label>
            <div className="col-sm-4">
             <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
          </div>
          <hr className="mb"/>
        </form>
        <br/>
        <a href="/success" className="btn btn-outline-dark">Publish</a>
        <a href="#" className="btn btn-outline-dark">Save</a>
        {/* <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button> */}
        <div>

        </div>

        </div>
      );
    }

}
