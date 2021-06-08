import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import BurgerMenu from './BurgerMenu';





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
      <Row >
        <Col md ="11"></Col> 
          <Col md="1"><BurgerMenu /></Col>
        </Row>
        <Row>
          <Col md="6"></Col>
          <Col md="6"></Col>
        </Row>
       
        
        
      </Container>
    </div>
  );
}

export default App;
