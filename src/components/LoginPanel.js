import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import './LoginPanel.css'
import { Button } from '@material-ui/core'

const LoginPanel = ({
  onLogin,
  onLogOut,
  isLoggedIn,
  loggedUsername,
  error
}) => {
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
              setUsername('')
              setPassword('')
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
          {error ? (
            <div>
              <p className="error-message">Username or password</p>
              <p className="error-message">probably not valid</p>
            </div>
          ) : null}
          <div className="login-btn">
            <Button
              onClick={() => {
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
  onLogin: PropTypes.func.isRequired,
  onLogOut: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  loggedUsername: PropTypes.string,
  error: PropTypes.bool
}

export default LoginPanel
