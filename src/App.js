import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import LoginPanelContainer from './containers/LoginPanelContainer'

const App = () => {
  const callApi = () => {
    fetch('http://localhost:3000/api/quizzes')
      .then(response => response.json())
      .then(r => console.log('api', r))
      .catch(e => console.error('error', e))
  }

  return (
    <Provider store={store}>
      <div>
        <LoginPanelContainer />
      </div>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
