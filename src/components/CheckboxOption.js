import React from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox } from '@material-ui/core'

const CheckboxOption = ({ checked, onCheckboxChanged, text }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={e => {
            onCheckboxChanged(e.target.checked)
          }}
        />
      }
      label={text}
    />
  )
}

export default CheckboxOption
