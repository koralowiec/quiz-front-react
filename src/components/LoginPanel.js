import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import './LoginPanel.css'
import { Button } from '@material-ui/core'

const LoginPanel = ({ onLogin, onLogOut, isLoggedIn, loggedUsername }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div id="LoginPanel">
      {isLoggedIn ? (
        <div>
          <p>Logged as {loggedUsername}</p>
          <Button
            onClick={() => {
              onLogOut()
            }}
          >
            Log Out
          </Button>
        </div>
      ) : (
        <div>
          <p>Login</p>
          <div className="input">
            <TextField
              label="username"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <TextField
              label="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="login-btn">
            <Button
              onClick={() => {
                console.log('Log In Clicked', username, password)
                onLogin(username, password)
              }}
            >
              Log In
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

LoginPanel.propTypes = {
  onLogin: PropTypes.func
}

export default LoginPanel
