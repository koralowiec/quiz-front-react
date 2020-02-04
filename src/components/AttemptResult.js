import React from 'react'
import PropTypes from 'prop-types'

const AttemptResult = ({ result }) => {
  return (
    <div>
      <p>Result</p>
      <p>Passed:</p>
      {result.passed === null ? (
        <p>loading</p>
      ) : (
        <p>{result.passed ? 'yes' : 'no'}</p>
      )}
    </div>
  )
}

AttemptResult.propTypes = {
  result: PropTypes.shape({
    passed: PropTypes.bool
  })
}

export default AttemptResult
