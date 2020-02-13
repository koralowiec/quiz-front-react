import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from '@material-ui/core'
import './AddMainInfoAboutNewQuiz.css'

const AddMainInfoAboutNewQuiz = ({ onAddNewQuiz }) => {
  const [quizTitle, setQuizTitle] = useState('')
  const [quizDescription, setQuizDescription] = useState('')

  return (
    <div id="AddMainInfoAboutNewQuiz">
      <div id="AddMainInfoAboutNewQuiz-input">
        <div>
          <TextField
            required
            label="Title"
            onChange={e => setQuizTitle(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Description"
            onChange={e => setQuizDescription(e.target.value)}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              onAddNewQuiz(quizTitle, quizDescription)
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

AddMainInfoAboutNewQuiz.propTypes = {
  onAddNewQuiz: PropTypes.func
}

export default AddMainInfoAboutNewQuiz
