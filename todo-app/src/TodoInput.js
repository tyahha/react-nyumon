import React, {Component} from 'react'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addTodo('新規TODO')
  }

  render() {
    return (
      <div>
        <input placeholder="新規のTODOを入力してください" />
        <button onClick={this.handleClick}>登録</button>
      </div>
    )
  }
}