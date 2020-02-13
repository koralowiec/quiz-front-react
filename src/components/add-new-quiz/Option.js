import React from 'react'
import PropTypes from 'prop-types'
import { InputBase, Switch } from '@material-ui/core'

const Option = ({ text, isCorrect }) => {
  return (
    <div>
      <InputBase value={text} onChange={() => {}} />
      <Switch checked={isCorrect} onChange={() => {}} />
    </div>
  )
}

Option.propTypes = {
  text: PropTypes.string,
  isCorrect: PropTypes.bool
}

export default Option
