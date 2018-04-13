import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {title: '1つめのTODO', id: 0},
        {title: '2つめのTODO', id: 1},
      ],
      uniqueId: 1,
    }

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(title) {
    const {
      tasks,
      uniqueId,
    } = this.state

    tasks.push({title, id: uniqueId})

    this.setState({tasks, uniqueId: uniqueId + 1})
  }

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
