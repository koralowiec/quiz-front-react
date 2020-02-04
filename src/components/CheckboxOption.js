import React from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel, Checkbox } from '@material-ui/core'

const CheckboxOption = ({ onCheckboxChanged, text }) => {
  return (
    <div>
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
    </div>
  )
}

CheckboxOption.propTypes = {
  onCheckboxChanged: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default CheckboxOption
