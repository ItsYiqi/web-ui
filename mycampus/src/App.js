import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Gallery from './pages/Gallery';
import Myproject from './pages/Myproject';
import CreateNewProject from './pages/CreateNewProject';
import NotFound from './pages/NotFound';
import Success from './pages/Success';



class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/myproject" component={Myproject}/>
            <Route path="/createproject" component={CreateNewProject}/>
            <Route path="/login" component={Login}/>
            <Route path="/success" component={Success}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </div>
    );
  }
}

export default App;
