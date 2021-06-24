import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login.js';
import Swipe from './Swipe.js';
import Footer from './Footer.js';
import Burger from './Burger.js';



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
          <Route path="/swipe" component={Swipe} />
          <Route path="/login" component={Login} />
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
