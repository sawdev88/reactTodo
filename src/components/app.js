import React, { Component } from 'react';
import Input from './input';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      completedTodos: [],
      activeToolBar: false
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

  addToCompletedTodos(idx, item) {
    this.setState({
      todos: this.state.todos.filter( (_, i) => i !== idx),
      completedTodos: this.state.completedTodos.concat(item)
    })
  }

  renderTodoList() {
    return (
      <ul className="todo-list">
        {this.state.todos.map( (item, i) => {
          return (
            <li
              key={ i }
              onClick={ this.markTodoCompleted }>
              <i
                onClick={ () => this.addToCompletedTodos(i, item) }
                className="fa fa-trash"
                aria-hidden="true">
              </i>
              { item }
            </li>
          )
        })}
      </ul>
    )
  }

  renderCompletedList() {
    return (
      <ul>
        {this.state.completedTodos.map( (item, i) => {
          return <li key={ i } >{ item }</li>
        })}
      </ul>
    )
  }

  markTodoCompleted(e) {
    e.target.classList.toggle('completed');
  }

  render() {
    console.log(this.state.completedTodos);
    return (
      <div className="todo-container">
        <h1>React Todo</h1>
        <Input addTodo={ this.addTodo.bind(this) } />
          { this.state.todos.length ? this.renderTodoList() : <div>No Items</div> }
          <section
            onClick={ () => this.setState({ activeToolBar: !this.state.activeToolBar }) }
            style={ this.state.activeToolBar ? {height: '12rem', overflowY: 'scroll'} : {height: '2rem'} }
            className="completed-container" >
              Deleted Todos ({ this.state.completedTodos.length })
              <br />
              {this.state.completedTodos.length ? this.renderCompletedList() : null }
          </section>
      </div>
    )
  }
}

export default App;
