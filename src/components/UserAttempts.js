import React from 'react'
import PropTypes from 'prop-types'

const UserAttempts = ({ attempts }) => {
  const attemptElements = attempts.map((attempt, i) => (
    <div key={i}>
      <p>{attempt.quiz.title}</p>
      <p>{attempt.passed.toString()}</p>
    </div>
  ))

  return <div>{attemptElements}</div>
}

UserAttempts.propTypes = {
  attempts: PropTypes.array
}

export default UserAttempts
