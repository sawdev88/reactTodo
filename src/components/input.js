import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ''
    }
  }

  onInputChange(item) {
    this.setState({ item })
  }

  render() {
    return (
      <div>
        <input
          value={ this.state.item }
          onChange={ e => this.onInputChange(e.target.value) } />
        <button onClick={ () => this.props.addTodo(this.state.item) }> Add Todo </button>
      </div>
    )
  }
}

export default Input;
