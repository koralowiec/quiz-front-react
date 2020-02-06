import React from 'react'
import PropTypes from 'prop-types'
import './AttemptResult.css'
import UserAttemptElement from './UserAttemptElement'

const AttemptResult = ({ result, fullResult }) => {
  return (
    <div id="AttemptResult">
      <div id="simple-result-info">
        <p>Result of the attempt</p>
        <p>Passed:</p>
        {result.passed === null ? (
          <p>loading</p>
        ) : (
          <p>{result.passed ? 'yes' : 'no'}</p>
        )}
      </div>
      {fullResult ? (
        <UserAttemptElement attempt={fullResult} />
      ) : (
        <p>loading...</p>
      )}
    </div>
  )
}

AttemptResult.propTypes = {
  result: PropTypes.shape({
    passed: PropTypes.bool
  }),
  fullResult: PropTypes.shape({
    quiz: PropTypes.object,
    answers: PropTypes.array
  })
}

export default AttemptResult
