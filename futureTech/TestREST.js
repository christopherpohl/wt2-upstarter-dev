import React from 'react';

class TestREST extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            input: ""
        }
        this.updateInput = this.updateInput.bind(this)
        this.addToDo = this.addToDo.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/todos') 
        .then(response => response.json())
        .then(data => {
            this.setState({
                todos: data
            })
        })
    }

    updateInput(e) {
        const value = e.target.value
        this.setState({ input: value })
    }

    addToDo() {
        fetch('http://localhost:8080/api/todos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({"descr" : this.state.input}) }) 
            .then(res => res.json())
            .then((result) => {
                this.setState((currentState) => {
                    return {
                        todos: currentState.todos.concat(result),
                        input: ""
                    }
                })
            })
    }

    deleteToDo(id){
        fetch('http://localhost:8080/api/todos/' + id, { method: 'DELETE' })
            .then(res => res.json())
            .then((result) => {
                this.setState((state) => {
                    return {
                        todos: state.todos.filter((val) => val.id !== result[0].id)
                    }

                })
            })
    }

    render() {
        return (
            <div>
                <h3>ToDos</h3>
                <ul>
                    {this.state.todos.map((element) => (
                        <li key={element.id}>{element.descr}
                            <button onClick={() => this.deleteToDo(element.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.updateInput}
                ></input><button onClick={this.addToDo}>Add</button>
            </div>
        );
    }
}

export default TestREST;
