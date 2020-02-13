import * as types from '../constants/new-quiz.action-types'

const initialState = { title: '', questions: [] }

export const newQuiz = (state = initialState, action) => {
  const { questionIndex } = action

  switch (action.type) {
    case types.CREATE_NEW_QUIZ: {
      const { title, description } = action.quiz
      return Object.assign({}, state, {
        title,
        description
      })
    }
    case types.CREATED_NEW_QUIZ:
      return Object.assign({}, state, {
        quizId: action.quizId,
        available: action.available
      })

    case types.CHANGE_AVAILABILITY:
      return {
        ...state,
        available: action.isAvailable
      }

    case types.ADD_QUESTION: {
      const emptyQuestion = { description: '', options: [], isSaved: false }
      return {
        ...state,
        questions: [...state.questions, emptyQuestion]
      }
    }

    case types.SAVED_QUESTION: {
      const { questionId } = action
      const questions = state.questions.map((question, index) => {
        if (index === questionIndex) {
          question.id = questionId
          return question
        }
        return question
      })
      return {
        ...state,
        questions
      }
    }

    case types.ADD_DESCRIPTION_TO_QUESTION: {
      const { description, questionIndex } = action
      const questions = state.questions.map((question, index) => {
        if (index === questionIndex) {
          question.description = description
          return question
        }
        return question
      })
      return {
        ...state,
        questions
      }
    }
    case types.ADD_OPTION_TO_QUESTION: {
      const { option } = action
      console.log('r', state)
      const questions = state.questions.map((question, index) => {
        if (index === questionIndex) {
          const { options } = question
          options.push(option)
          return question
        }
        return question
      })
      console.log('r', state, questions)
      return Object.assign({}, state, { questions })
    }
    case types.ADD_SNIPPET_TO_QUESTION: {
      const { snippet } = action
      const { questionIndex } = action
      const questions = state.questions.map((question, index) => {
        if (index === questionIndex) {
          question.snippet = snippet
          return question
        }
        return question
      })
      console.log('r ADD_SNIPPET_TO_QUESTION', questions)
      return Object.assign({}, state, { questions })
    }

    case types.SAVED_PICTURE: {
      const { id } = action
      const { questionIndex } = action
      const questions = state.questions.map((question, index) => {
        if (index === questionIndex) {
          question.photoId = id
          return question
        }
        return question
      })
      return Object.assign({}, state, { questions })
    }

    default:
      return state
  }
}
