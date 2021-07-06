import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"

import { Link, useHistory } from "react-router-dom"



function Login() {
  return (
    
      <Card>
        <Card.Body>
          <h2 className="text-center mb-14" >Log In</h2>
          <Form action="/swipe">
          
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Passwort</Form.Label>
              <Form.Control type="password"/>
            </Form.Group>
            <input  className="loginbtn"type="submit" value="Loginss" />
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Passwort vergessen?</Link>
          </div>
        </Card.Body>
      </Card>

  ); 
}

export default Login;