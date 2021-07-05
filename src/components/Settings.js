import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"
import UpdateProfile from "./UpdateProfile"

export default function Settings() {
    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const history = useHistory()
   

  return (
    <>
     
            <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Einstellungen</h2>
            {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                    <h5 class="card-title">Mein Konto</h5>
                    <p class="card-text">
                    Hier können Sie Ihr Konto ansehen und ändern.
                    </p>
                    <div class="d-grid gap-2 col-4 mx-auto">
                    <a href="/update-profile" class="btn btn-primary">Zu meinem Konto</a>
                    </div>
                </div>
            </div>
            
            <div class="col-sm-6"></div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Mein Konto</h5>
                    <p class="card-text">
                    Hier können Sie Ihr Konto ansehen und ändern.
                    </p>
                    <div class="d-grid gap-2 col-4 mx-auto">
                    <button type="button" class="btn btn-primary">Zu meinem Konto</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Mein Konto</h5>
                    <p class="card-text">
                    Hier können Sie Ihr Konto ansehen und ändern.
                    </p>
                    <div class="d-grid gap-2 col-4 mx-auto">
                    <button type="button" class="btn btn-primary">Zu meinem Konto</button>
                    </div>
                </div>
            </div>


           
            </Card.Body>
      </Card>
     
    </>
  )
}
