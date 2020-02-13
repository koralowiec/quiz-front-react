import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, InputBase, Switch } from '@material-ui/core'

const NewOption = ({ onAddNewOption }) => {
  const [text, setText] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)

  return (
    <div>
      <InputBase
        placeholder="New option"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Switch
        checked={isCorrect}
        onChange={e => setIsCorrect(e.target.checked)}
      />
      <Button
        onClick={() => {
          onAddNewOption(text, isCorrect)
          setText('')
          setIsCorrect(false)
        }}
      >
        Add option
      </Button>
    </div>
  )
}

NewOption.propTypes = {
  onAddNewOption: PropTypes.func
}

export default NewOption
