import { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'

const defaultStateSelector = state => state
const defaultActionSelector = dispatch => dispatch

export const useRedux = (
  stateSelector = defaultStateSelector,
  actionSelector = defaultActionSelector,
) => {
  const {
    storeState: state,
    store: { dispatch },
  } = useContext(ReactReduxContext)

  return [stateSelector(state), actionSelector(dispatch)]
}

export default useRedux
