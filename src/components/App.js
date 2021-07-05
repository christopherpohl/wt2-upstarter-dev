import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import BurgerMenu from './BurgerMenu';
import Footer from './Footer.js';
import LoginScreen from './LoginScreen.js';
import Swipe from './Swipe.js';
import { Abo } from './abo.js';






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
        <Col lg ="11"></Col> 
          <Col lg="1"><BurgerMenu /></Col>
        </Row>
        <Row className="middle">
          <Col lg="3"></Col>
          <Col lg="6">

          <Abo />

            <Route path="/swipe" component={Swipe} />
          
            <Route path="/login" component={LoginScreen} />
          </Col>

          
        </Row>
      <Row className="foot">
        <Col lg="4">
          
        </Col>
        <Col lg="4"><Footer /></Col>
        
        
      </Row>
      </Router>
      </Container>
    </div>
  );
}

export default App;
