import React from 'react'
import PropTypes from 'prop-types'
import AddMainInfoAboutNewQuiz from './AddMainInfoAboutNewQuiz'
import MainInfoAboutNewQuiz from './MainInfoAboutNewQuiz'
import { Button } from '@material-ui/core'
import QuestionInNewQuiz from './QuestionInNewQuiz'
import './AddNewQuiz.css'

const AddNewQuiz = ({
  addNewQuiz,
  quizId,
  title,
  available,
  description,
  questions,
  addNewQuestion,
  editDescription,
  editSnippet,
  addOption,
  changeAvailability,
  saveQuestion,
  savePicture
}) => {
  const isQuizCreated = quizId

  const questionElements = questions.map((question, i) => {
    return (
      <QuestionInNewQuiz
        key={i}
        question={question}
        editDescription={description => {
          editDescription(i, description)
        }}
        editSnippet={snippet => {
          editSnippet(i, snippet)
        }}
        addOption={(text, isCorrect) => {
          addOption(i, text, isCorrect)
        }}
        saveQuestion={() => saveQuestion(i)}
        savePicture={picture => savePicture(i, picture)}
      />
    )
  })

  return (
    <div>
      {isQuizCreated ? (
        <MainInfoAboutNewQuiz
          title={title}
          description={description}
          available={available}
          changeAvailable={changeAvailability}
        />
      ) : (
        <AddMainInfoAboutNewQuiz onAddNewQuiz={addNewQuiz} />
      )}
      {isQuizCreated ? (
        <div id="questions-panel">
          {questionElements}
          <Button onClick={addNewQuestion}>Add question</Button>
        </div>
      ) : null}
    </div>
  )
}

AddNewQuiz.propTypes = {
  quizId: PropTypes.number,
  title: PropTypes.string,
  available: PropTypes.bool,
  description: PropTypes.string,
  questions: PropTypes.array,
  addNewQuiz: PropTypes.func,
  addNewQuestion: PropTypes.func,
  editDescription: PropTypes.func,
  editSnippet: PropTypes.func,
  addOption: PropTypes.func,
  changeAvailability: PropTypes.func,
  saveQuestion: PropTypes.func,
  savePicture: PropTypes.func
}

export default AddNewQuiz
