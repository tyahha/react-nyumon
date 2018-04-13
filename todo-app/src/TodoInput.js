import React, {Component} from 'react'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value})
  }

  handleClick() {
    this.props.addTodo(this.state.inputValue)
    this.setState({inputValue: ''})
  }

  render() {
    return (
      <div>
        <input
          placeholder="新規のTODOを入力してください"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>登録</button>
      </div>
    )
  }
}