import { getType } from './utils'

export const isFetching = (state, type) =>
  state[getType(type)] === true

export const error = (state, type) => state[getType(type)]
