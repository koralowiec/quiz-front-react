import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from '@material-ui/core'
import './SignUpPanel.css'

const SignUpPanel = ({ createAnAccount, error, created }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [wariningMessage, setWarningMessage] = useState('')

  const onSignUpClicked = () => {
    let warning = ''
    if (password.length < 8) {
      warning = 'Password is too short (at least 8 characters needed) '
    }
    if (username.length < 4) {
      warning = `${warning}Username is too short (at least 4 characters)`
    }

    if (warning.length === 0) {
      createAnAccount(username, password)
    } else {
      setWarningMessage(warning)
    }
  }

  return (
    <div id="SignUpPanel">
      <div>
        <p>Create an account</p>
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
        <p>{wariningMessage}</p>
        <Button onClick={onSignUpClicked}>Sign Up</Button>
        {created ? <p>Account created</p> : null}
      </div>
    </div>
  )
}

SignUpPanel.propTypes = {
  createAnAccount: PropTypes.func.isRequired,
  error: PropTypes.bool,
  created: PropTypes.bool
}

export default SignUpPanel
