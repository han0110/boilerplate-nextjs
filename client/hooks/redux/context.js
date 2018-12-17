import _initStore from '../../redux/store'

let store

export const setStore = (s) => {
  store = s
}

export const getStore = () => {
  if (!store) {
    setStore(_initStore({}))
  }
  return store
}

export const initStore = (initialState = {}) => {
  setStore(_initStore(initialState))
}
