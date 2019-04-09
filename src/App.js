import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/navbar'
import HomePage from './components/static/homepage';
import signup from './components/auth/signup';
import signin from './components/auth/signin';
import dashboard from './components/dashboard/dashboard';

class App extends Component {
  componentDidMount(){
    // M.AutoInit();
    var sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {
      edge:'right',
    })
  }

  render() {
    return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/signup' component={signup}/>
        <Route path='/signin' component={signin}/>
        <Route path='/dashboard' component={dashboard}/>
        
        {/* <Route path="/project/:id" component={projectdetails} />
        <Route path='/create' component={CreateProject}/> */}
      </Switch>
      </div>
      </BrowserRouter>
   );
  }
}

export default App;
