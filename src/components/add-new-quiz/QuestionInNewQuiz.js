import React from 'react'
import PropTypes from 'prop-types'
import { Button, InputBase } from '@material-ui/core'
import Option from './Option'
import NewOption from './NewOption'
import './QuestionInNewQuiz.css'

const QuestionInNewQuiz = ({
  question,
  editDescription,
  editSnippet,
  addOption,
  saveQuestion,
  savePicture
}) => {
  const { options, description, snippet, id } = question

  const isSaved = id

  const optionElements = options.map((option, i) => (
    <Option key={i} text={option.text} isCorrect={option.isCorrect} />
  ))

  return (
    <div className="QuestionInNewQuiz">
      <div>
        <div>
          <InputBase
            placeholder="Description"
            value={description}
            onChange={e => {
              if (!isSaved) {
                editDescription(e.target.value)
              }
            }}
            multiline
          />
        </div>
        <div>
          {isSaved && !snippet ? null : (
            <InputBase
              placeholder="Snippet"
              value={snippet}
              onChange={e => {
                if (!isSaved) {
                  editSnippet(e.target.value)
                }
              }}
              multiline
            />
          )}
        </div>
        <div>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={e => {
              const photo = e.target.files[0]
              savePicture(photo)
            }}
          />
        </div>
        {optionElements}
        {isSaved ? null : (
          <div>
            <NewOption onAddNewOption={addOption} />
            <Button onClick={saveQuestion}>Save question</Button>
          </div>
        )}
      </div>
    </div>
  )
}

QuestionInNewQuiz.propTypes = {
  question: PropTypes.shape({
    options: PropTypes.array,
    description: PropTypes.string,
    snippet: PropTypes.string,
    id: PropTypes.number
  }),
  editDescription: PropTypes.func,
  editSnippet: PropTypes.func,
  addOption: PropTypes.func,
  saveQuestion: PropTypes.func,
  savePicture: PropTypes.func
}

export default QuestionInNewQuiz
