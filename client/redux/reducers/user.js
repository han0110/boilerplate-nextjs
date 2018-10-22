import C from '../constants'

const initialState = {
  id: '',
  name: '',
  fetching: false,
  error: '',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case C.AUTH_FETCHING: {
      return { ...state, fetching: action.fetching }
    }
    case C.AUTH_ERROR: {
      return { ...state, error: action.error }
    }
    case C.SET_AUTH: {
      return { ...state, ...action.data }
    }
    case C.RESET_AUTH: {
      return initialState
    }
    default:
      return state
  }
}

export default user
