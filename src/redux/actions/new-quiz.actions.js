import * as types from '../constants/new-quiz.action-types'

export const createNewQuiz = quiz => ({
  type: types.CREATE_NEW_QUIZ,
  quiz
})

export const createdNewQuiz = (quizId, available) => ({
  type: types.CREATED_NEW_QUIZ,
  quizId,
  available
})

export const errorDuringCreatingNewQuiz = () => ({
  type: types.ERROR_DURING_CREATING_QUIZ
})

export const addQuestion = () => ({
  type: types.ADD_QUESTION
})

export const addDescripitonToQuestion = (questionIndex, description) => ({
  type: types.ADD_DESCRIPTION_TO_QUESTION,
  description,
  questionIndex
})

export const addOptionToQuestion = (questionIndex, text, isCorrect) => ({
  type: types.ADD_OPTION_TO_QUESTION,
  option: {
    text,
    isCorrect
  },
  questionIndex
})

export const addSnippetToQuestion = (questionIndex, snippet) => ({
  type: types.ADD_SNIPPET_TO_QUESTION,
  snippet,
  questionIndex
})

export const addAndSavePicture = (questionIndex, picture) => ({
  type: types.ADD_AND_SAVE_PICTURE,
  picture,
  questionIndex
})

export const savedPicture = (questionIndex, id) => ({
  type: types.SAVED_PICTURE,
  id,
  questionIndex
})

export const errorDuringSavingPicture = questionIndex => ({
  type: types.ERROR_DURING_SAVING_PICTURE,
  questionIndex
})

export const changeAvailability = isAvailable => ({
  type: types.CHANGE_AVAILABILITY,
  isAvailable
})

export const changedAvailability = () => ({
  type: types.CHANGED_AVAILABILITY
})

export const saveQuestion = questionIndex => ({
  type: types.SAVE_QUESTION,
  questionIndex
})

export const savedQuestion = (questionIndex, questionId) => ({
  type: types.SAVED_QUESTION,
  questionId,
  questionIndex
})

export const errorDuringSavingQuestion = questionIndex => ({
  type: types.ERROR_DURING_SAVING_QUESITON,
  questionIndex
})
