import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import UserAttempts from './UserAttempts'

const UserInfo = ({ getUserAttempts, attempts, error }) => {
  useEffect(() => {
    getUserAttempts()
  }, [])

  return (
    <div>
      <p>User info</p>
      {error ? <p>Error occured</p> : null}
      {attempts && attempts.length > 0 ? (
        <UserAttempts attempts={attempts} getUserAttempts={getUserAttempts} />
      ) : null}
    </div>
  )
}

UserInfo.propTypes = {
  getUserAttempts: PropTypes.func.isRequired,
  attempts: PropTypes.array,
  error: PropTypes.bool
}

export default UserInfo
