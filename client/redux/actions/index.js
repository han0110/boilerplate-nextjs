import C from '../constants'

export const fetch = (fetching) => ({
  type: C.AUTH_FETCHING, fetching,
})

export const fetchError = (error) => ({
  type: C.AUTH_ERROR, error,
})

export const setAuth = (data) => ({
  type: C.SET_AUTH, data,
})

export const resetAuth = (data) => ({
  type: C.RESET_AUTH, data,
})

export const signupRequest = (data) => ({
  type: C.SIGN_UP_REQUEST, data,
})

export const signinRequest = (data) => ({
  type: C.SIGN_IN_REQUEST, data,
})

export const signoutRequest = (data) => ({
  type: C.SIGN_OUT_REQUEST, data,
})
