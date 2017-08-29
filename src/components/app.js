import React, { Component } from 'react';
import Input from './input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    const addTodo = this.addTodo.bind(this);
  }

  addTodo(item) {
    this.setState({
      todos: this.state.todos.concat(item)
    })
  }

  renderTodoList() {
    return (
      <ul>
        {this.state.todos.map( item => {
          return <li>{ item }</li>
        })}
      </ul>
    )
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="container">
        <Input addTodo={ this.addTodo.bind(this) } />
          { this.renderTodoList() }
      </div>
    )
  }
}

export default App;
