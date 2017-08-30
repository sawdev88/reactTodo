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
    if (item.length) {
      this.setState({
        todos: this.state.todos.concat(item)
      })
    }
  }

  removeTodo(idx) {
    this.setState({
      todos: this.state.todos.filter( (_, i) => i !== idx)
    })
  }

  renderTodoList() {
    if (this.state.todos.length) {
      return (
        <ul>
          {this.state.todos.map( (item, i) => {
            return (
              <li
                key={ i }
                onClick={ this.markTodoCompleted }>
                <i
                  onClick={ () => this.removeTodo(i) }
                  className="fa fa-trash"
                  aria-hidden="true">
                </i>
                { item }
              </li>
            )
          })}
        </ul>
      )} else {
        return <div className="center margin-top">No Items</div>
      }
  }

  markTodoCompleted(e) {
    e.target.classList.toggle('completed');
  }

  render() {
    return (
      <div className="todo-container">
        <h1>React Todo</h1>
        <Input addTodo={ this.addTodo.bind(this) } />
          { this.renderTodoList() }
      </div>
    )
  }
}

export default App;
