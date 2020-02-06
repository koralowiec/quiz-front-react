import React from 'react'
import { withStyles, Checkbox } from '@material-ui/core'

export const GreenCheckbox = withStyles({
  root: {
    color: '#9ccc65'
  }
})(props => <Checkbox color="default" {...props} />)

export const RedCheckbox = withStyles({
  root: {
    color: '#ff7043'
  }
})(props => <Checkbox color="default" {...props} />)

export const GrayCheckbox = withStyles({
  root: {
    color: '#9e9e9e'
  }
})(props => <Checkbox color="default" {...props} />)
