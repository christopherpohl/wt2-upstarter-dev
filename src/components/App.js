
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Swipe from './Swipe.js';
import Footer from './Footer.js';
import Burger from './Burger.js';
import Profil from './Profil.js';
import Buttons from  './Buttons.js';


import Login from "./Login";


import LoginScreen from './LoginScreen.js';

import Settings from './Settings.js';
import Dashboard from './Dashboard.js';




function App() {
  return (

    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <Container fluid>  
      <Router>

      <Row className="header">
      <Col>
       <Burger /></Col>
       
      </Row>
        
      <Row className="middle">
        <Col lg="3"></Col>
        <Col lg="6">
          <Switch>
          <Route path="/login" component={Login} />
          <Route path="/swipe" component={Swipe} />
          <Route path="/profil" component={Profil} />
          <Route path="/landing" component={Buttons}/>          
          <Route path="/" component={Buttons} />

          </Switch>
        </Col>          
      </Row>
      
      <Row className="foot">
        <Col lg="4"></Col>
        <Col lg="4"><Footer /></Col>
      </Row>
      
      </Router>
      </Container>
    </div>

  );
}

export default App;
