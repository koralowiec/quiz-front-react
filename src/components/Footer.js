import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

const Footer = ({ username }) => {
  return (
    <footer id="footer">{username ? <p>Logged as {username}</p> : null}</footer>
  )
}

export default Footer
