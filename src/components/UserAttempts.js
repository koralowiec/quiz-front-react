import React from 'react'
import PropTypes from 'prop-types'
import UserAttemptElement from './UserAttemptElement'

const UserAttempts = ({ attempts }) => {
  const attemptElements = attempts.map((attempt, i) => (
    <UserAttemptElement key={i} attempt={attempt} />
  ))

  return <div>{attemptElements}</div>
}

UserAttempts.propTypes = {
  attempts: PropTypes.array
}

export default UserAttempts
