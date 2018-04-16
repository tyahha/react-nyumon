import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import tasksReducer from './reducers/tasks'
import TodoApp from './containers/TodoApp'
import { render } from 'react-dom'

const store = createStore(
  tasksReducer,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)

//store.subscribe(() => renderApp(store))
//renderApp(store)