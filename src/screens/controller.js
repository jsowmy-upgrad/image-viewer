import React, {Component} from 'react';
import Login from '../screens/login/login';
import Profile from '../screens/profile/profile';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

  class controller extends Component{

    
    constructor() {
        super();
    }
      
    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl}/>}/>
                  
                    <Route path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl}/>}/>
                </div>
            </Router>

        )
    }
  }
  export default controller;