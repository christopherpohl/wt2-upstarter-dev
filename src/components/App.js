
import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Swipe from './Swipe.js';
import Footer from './Footer.js';
import Burger from './Burger.js';
import Profil from './Profil.js';
import Buttons from  './Buttons.js';
import Logout from './logout.js';
import Abo from './abo.js';



//import Login from "./Login";

import Login from './Login/LoginC';



import Settings from './Settings.js';


import useFetch from "react-fetch-hook"

import axios from 'axios';

function App() {
  const { isLoading, data } = useFetch("http://localhost:8080/api/abos/"+localStorage.getItem('user'));


  console.log(localStorage.getItem('user'));
  if(!localStorage.getItem('user')) {
    console.log(localStorage.getItem('user'));
    return <div className="App">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <Container fluid> 
<Row className="fakeTop"></Row>
<Row className="middle">
      <Col lg="3"></Col>
      <Col lg="6">
  <Login/>
</Col >
</Row >
<Row className="foot">
      <Col lg="4"></Col>
      <Col lg="4"><Footer /></Col>
    </Row>
</Container>
</div>
  }

  localStorage.setItem('abos', data);

  
  return isLoading ? (

    <div></div> ): (


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
     
          <Route path="/swipe" component={Swipe} />
          <Route path="/logout" component={Logout} />
          <Route path="/profil" component={Profil} />
          <Route path="/landing" component={Buttons}/>        
          <Route path="/settings" component={Settings}/>   
          <Route path="/abo" component={Abo}/>   
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
