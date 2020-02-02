import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import LoginPanelContainer from './containers/LoginPanelContainer'
import QuizzesListContainer from './containers/QuizzesListContainer'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>Quizzes</header>
        <LoginPanelContainer />
        <QuizzesListContainer />
      </div>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
