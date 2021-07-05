import React from 'react';

export default class LoginA extends React.Component {

    constructor() {
        super();
        this.state = {
            usernameInput: '',
            passwordInput: '',
            refresh_token: '',
            access_token: '',
            username: '',

        }

        this.updateUsernameField = this.updateUsernameField.bind(this)
        this.updatePasswordField = this.updatePasswordField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateUsernameField(event) {
        this.setState({
            usernameInput: event.target.value
        })
    }

    updatePasswordField(event) {
        this.setState({
            passwordInput: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData()
        formData.append("grant_type", "password")
        formData.append("client_id", "reactapp")
        formData.append("client_secret", "abc123")
        formData.append("username", this.state.usernameInput)
        formData.append("password", this.state.passwordInput)
        formData.append("scope", 'admin')

        const requestOptions = {
            method: 'POST',
            body: formData
        }
        fetch('http://localhost:8080/api/auth', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    this.setState(currentState => ({
                        access_token: data.access_token,
                        refresh_token: data.refresh_token,
                        username: currentState.usernameInput
                    }))
                }
                else {
                    alert("Wrong credentials");
                }
                this.setState({
                    passwordInput: '',
                    usernameInput: ''
                })
            })
    }


    render() {
        if (this.state.refresh_token === '') {
            return (
                <div>
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Username:
                                </td>
                                    <td>
                                        <input type="text" name="username" onChange={this.updateUsernameField} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Password:
                                </td>
                                    <td>
                                        <input type="password" name="password" onChange={this.updatePasswordField} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            )

        }
        else {
            return (
                <h1>You are logged in as {this.state.username}</h1>
            )
        }
    }
}