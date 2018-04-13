import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {
  render() {
    const tasks = [
      {title: '1つめのTODO', id: 0},
      {title: '2つめのTODO', id: 1},
    ]
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput />
        <TodoList tasks={tasks} />
      </div>
    );
  }
}

export default App;
