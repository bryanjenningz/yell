import {combineReducers} from 'redux'

const count = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_SUCCESS':
      return state + 1
    case 'DECREMENT_SUCCESS':
      return state - 1
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'INCREMENT_REQUEST':
    case 'INCREMENT_SUCCESS':
      return null
    case 'INCREMENT_FAILURE':
      return action.message || 'Something went wrong.'
    default:
      return state
  }
}

const counter = combineReducers({count, errorMessage})

const update = combineReducers({counter})
export default update

export const getCount = (state) => state.counter.count
export const getCountError = (state) => state.counter.errorMessage
