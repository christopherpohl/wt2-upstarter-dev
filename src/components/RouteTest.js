import React from 'react';

class RouteTest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            input: ""
        }
        this.addUser = this.addUser.bind(this)
        this.addAbos = this.addAbos.bind(this)
        this.changeBN =this.changeEM.bind(this)
        this.changePW =this.changePW.bind(this)
        this.deleteAbo = this.deleteAbo.bind(this)
    }

  
    addUser() {
       
      
       
        fetch('http://localhost:8080/api/addUser', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"benutzername" : 'testUser',"passwort" : 'testUser',"email": 'hallo'}) }) 
            .then(res => res.json())
            .then((result) => {
                this.setState((currentState) => {
                    return {
                        
                    }
                })
            })
    }

    addAbos(){

        fetch('http://localhost:8080/api/addAbo', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"idAbo" : 4 ,"idProfil" : 3}) })
            .then(res => res.json())
            .then((result) => {
                this.setState((currentState) => {
                    return {
                        
                    }
                })
            })
    }

    changePW(){

        fetch('http://localhost:8080/api/changePW', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"passwort" : 'blubbb' ,"userid" : 2}) })
            .then(res => res.json())
            .then((result) => {
                
            })
    }

    changeEM(){

        fetch('http://localhost:8080/api/changeEM', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"email" : 'popel' ,"userid" : 3}) })
            .then(res => res.json())
            .then((result) => {
                
            })
    }

    deleteAbo(id){
        fetch('http://localhost:8080/api/todos/' + id, { method: 'DELETE' })
            .then(res => res.json())
            .then((result) => {
                

                
            })
    }


    render() {
        return (
            <div>
                <h3>User Hinzufügen</h3>
                
            <button onClick={this.addUser}>Add</button>
            <h3>addAbo Hinzufügen</h3>
                
                <button onClick={this.addAbos}>Add</button>
                <h3>email aendern</h3>
                
                <button onClick={this.changeEM}>Add</button>
            
                <h3>passwort aendern</h3>
                
                <button onClick={this.deleteAbo(3)}>Add</button>
            
            
            </div>
            
        );
    }
}

export default RouteTest;
