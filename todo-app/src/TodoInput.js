import React, {Component} from 'react'

export default class TodoInput extends Component {
  render() {
    return (
      <div>
        <input placeholder="新規のTODOを入力してください" />
        <button>登録</button>
      </div>
    )
  }
}