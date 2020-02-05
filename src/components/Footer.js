import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import { Link } from '@reach/router'

const Footer = ({ username }) => {
  return (
    <footer id="footer">
      {username ? (
        <p>
          Logged as <Link to="/info">{username}</Link>
        </p>
      ) : null}
    </footer>
  )
}

Footer.propTypes = {
  username: PropTypes.string
}

export default Footer
