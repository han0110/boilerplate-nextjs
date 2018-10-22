import { takeLatest } from 'redux-saga/effects'

import C from '../constants'

function * signup () {

}

function * authorize () {

}

function * watchSignUp () {
  yield takeLatest(C.SIGN_UP_REQUEST, signup)
}

function * watchSignIn () {
  yield takeLatest(C.SIGN_UP_REQUEST, authorize)
}

export default [
  watchSignUp,
  watchSignIn,
]
