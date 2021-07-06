import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"

export default function Settings() {


    
    const [changePW, setChangePW] = useState(false)
    if(changePW){
        
        fetch('http://localhost:8080/api/changePW', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"passwort" : 'ZONKKKK' ,"userid" : 2}) })
        .then(res => res.json())
        .then((result) => {
            setChangePW(!changePW);
        })
    }

    
    const [changeEM, setChangeEM] = useState(false)
    if(changeEM){
        
        fetch('http://localhost:8080/api/changeEM', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"email" : 'ZONKKKK' ,"userid" : 2}) })
        .then(res => res.json())
        .then((result) => {
            setChangeEM(!changeEM);
        })
    }

    const [deleteABO, setDeleteABO] = useState(false)
    if(deleteABO){
    
            fetch('http://localhost:8080/api/deleteAbo/' + 3, { method: 'DELETE' })
                .then(res => res.json())
                .then((result) => {
                    setDeleteABO(!deleteABO);
                })
        
    }

    


    return (
        <>

            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Einstellungen</h2>


                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Passwort ändern</h5>
                                    <p class="card-text">
                                        Hier können Sie Ihr Passwort ändern.
                                    </p>
                                    <div class="d-grid gap-2 col-4 mx-auto">
                                        <div class="form-outline">
                                            <input type="text" id="form1" class="form-control" placeholder="Altes Passwort" />
                                            <input type="text" id="form1" class="form-control" placeholder="Neues Passwort" />
                                            
                                        </div>
                                        
                                        <button onClick={() => setChangePW(!changePW)} type="button" class="btn btn-primary">Passwort ändern</button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6"></div>

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Email ändern</h5>
                                    <p class="card-text">
                                        Hier können Sie Ihre Email ändern.
                                    </p>


                                    <div class="d-grid gap-2 col-4 mx-auto">
                                        <div class="form-outline">
                                            <input type="email" id="typeEmail" class="form-control" placeholder="Neue Email eingeben" />
                                            </div>        
                                            </div>
                                            <div class="form-helper">Geben Sie zum Bestätigen Ihr Passwort ein</div>
                                            <div class="d-grid gap-2 col-4 mx-auto">
                                            <input type="text" id="form1" class="form-control" placeholder="Passwort" />
                                            <button onClick={() => setChangeEM(!changeEM)} type="button" class="btn btn-primary">Email ändern</button>
                                   
                                        </div>

                                   

                                </div>

                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Abos leeren</h5>
                                    <p class="card-text">
                                        Hier können Sie Ihre Abos leeren.
                            </p>

                                    <form class="form-inline">
                                        <div class="form-group mb-2">
                                            <label for="staticEmail2" class="sr-only">Email</label>
                                            <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"></input>
                                        </div>
                                        <div class="form-group mx-sm-3 mb-2">
                                            <label for="inputPassword2" class="sr-only">Geben Sie zur Bestätigung Ihr Passwort ein</label>
                                            <input type="password" class="form-control" id="inputPassword2" placeholder="Passwort"></input>
                                        </div>
                                        <button onClick={() => setDeleteABO(!deleteABO)} type="button" class="btn btn-primary">Abos Leeren</button>
                                     
                                    </form>


                                </div>
                            </div>

                        </div>
                    </div>




                </Card.Body>
            </Card>

        </>
    )
}

