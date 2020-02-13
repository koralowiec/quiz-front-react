import { connect } from 'react-redux'
import AddNewQuiz from '../../components/add-new-quiz/AddNewQuiz'
import {
  createNewQuiz,
  addQuestion,
  addDescripitonToQuestion,
  addSnippetToQuestion,
  addOptionToQuestion,
  changeAvailability,
  saveQuestion,
  addAndSavePicture
} from '../../redux/actions/new-quiz.actions'

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  const { title, description, quizId, questions, available } = state.newQuiz

  return {
    quizId,
    title,
    description,
    questions,
    available
  }
}

const mapDispatchToProps = dispatch => ({
  addNewQuiz: (title, description) =>
    dispatch(createNewQuiz({ title, description })),
  addNewQuestion: () => dispatch(addQuestion()),
  editDescription: (questionIndex, description) =>
    dispatch(addDescripitonToQuestion(questionIndex, description)),
  editSnippet: (questionIndex, snippet) =>
    dispatch(addSnippetToQuestion(questionIndex, snippet)),
  addOption: (questionIndex, text, isCorrect) =>
    dispatch(addOptionToQuestion(questionIndex, text, isCorrect)),
  changeAvailability: isAvailable => dispatch(changeAvailability(isAvailable)),
  saveQuestion: questionIndex => dispatch(saveQuestion(questionIndex)),
  savePicture: (questionIndex, picture) =>
    dispatch(addAndSavePicture(questionIndex, picture))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNewQuiz)
