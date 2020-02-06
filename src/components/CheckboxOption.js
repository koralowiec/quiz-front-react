import React from 'react'
import PropTypes from 'prop-types'
import { FormControlLabel } from '@material-ui/core'
import { GrayCheckbox } from './ColorCheckbox'

const CheckboxOption = ({ onCheckboxChanged, text }) => {
  return (
    <div>
      <FormControlLabel
        control={
          <GrayCheckbox
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
