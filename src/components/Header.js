import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import './Header.css'
import { Button } from '@material-ui/core'

const Header = ({ isLogged, logout }) => {
  return (
    <header>
      <Link className="link" to="/">
        <Button>Home</Button>
      </Link>
      <p>TWiJ Quizzes</p>
      <Link className="link" to="/login">
        {isLogged ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button>Login</Button>
        )}
      </Link>
    </header>
  )
}

Header.propTypes = {
  isLogged: PropTypes.bool,
  logout: PropTypes.func
}

export default Header
