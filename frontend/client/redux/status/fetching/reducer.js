import {
  REQUEST,
  SUCCESS,
  FAILURE,
  getType,
  getStatus,
} from '../utils'

const initialState = {}

const fetching = (state = initialState, action) => {
  const type = getType(action.type)
  const status = getStatus(action.type)

  switch (status) {
    case REQUEST:
      return { ...state, [type]: true }
    case SUCCESS:
    case FAILURE:
      return { ...state, [type]: false }
    default:
      return state
  }
}

export default fetching
