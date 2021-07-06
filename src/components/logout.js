import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { Component, useState } from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { render } from "@testing-library/react";
import Login from './Login/LoginC';
import Buttons from  './Buttons.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Logout() {


    const BasicExample = () => (
        <Router>
          <div>
          
      
            <Route exact path="/" component={Buttons}/>
          
          </div>
        </Router>
      )
  
    localStorage.removeItem('user');
   
   
    
    
    
}

export default Logout;