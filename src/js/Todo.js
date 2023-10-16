import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  addTodo = () => {
    const { newTodo } = this.state;
    if (newTodo.trim() !== '') {
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        newTodo: '',
      }));
    }
  };

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h3>To-Do List</h3>
        <div>
          <input
            type="text"
            placeholder="Add a new to-do"
            value={newTodo}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
