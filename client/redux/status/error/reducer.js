import {
  REQUEST,
  FAILURE,
  getType,
  getStatus,
} from '../utils'

const initialState = {}

const error = (state = initialState, action) => {
  const type = getType(action.type)
  const status = getStatus(action.type)

  switch (status) {
    case REQUEST:
      return { ...state, [type]: null }
    case FAILURE:
      return { ...state, [type]: action.payload.error }
    default:
      return state
  }
}

export default error
