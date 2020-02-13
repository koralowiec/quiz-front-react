import React from 'react'
import PropTypes from 'prop-types'
import { Switch, FormControlLabel } from '@material-ui/core'
import './MainInfoAboutNewQuiz.css'

const MainInfoAboutNewQuiz = ({
  title,
  description,
  available,
  changeAvailable
}) => {
  return (
    <div id="MainInfoAboutNewQuiz">
      <div id="main-info-elements">
        <div className="main-info-element">Title: {title}</div>
        <div className="main-info-element">Description: {description}</div>
      </div>
      <div>
        <FormControlLabel
          className="main-info-element"
          control={
            <Switch
              checked={available}
              onChange={e => {
                changeAvailable(e.target.checked)
              }}
            />
          }
          label="Available to users"
        />
      </div>
    </div>
  )
}

MainInfoAboutNewQuiz.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  available: PropTypes.bool,
  changeAvailable: PropTypes.func
}

export default MainInfoAboutNewQuiz
