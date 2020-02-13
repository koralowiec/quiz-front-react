import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import './Header.css'
import { Button } from '@material-ui/core'
import { userRoles } from '../constants/userRoles'

const Header = ({ isLogged, logout, role }) => {
  const isAllowed = role === userRoles.quizMaker || role === userRoles.admin

  return (
    <header>
      <div id="header-wrapper">
        <Link className="link" to="/">
          <Button>TWiJ Quizzes</Button>
        </Link>
        <div id="right-side-header">
          {isAllowed ? (
            <div id="restricted-right-side-header">
              <Link className="link" to="/add-new-quiz">
                <Button>Add quiz</Button>
              </Link>
              <Link className="link" to="/manage-your-quizzes">
                <Button>Manage your quizzes</Button>
              </Link>
            </div>
          ) : null}
          <Link className="link" to="/login">
            {isLogged ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <Button>Login</Button>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  isLogged: PropTypes.bool,
  logout: PropTypes.func,
  role: PropTypes.oneOf([
    userRoles.normal,
    userRoles.quizMaker,
    userRoles.admin
  ])
}

export default Header
