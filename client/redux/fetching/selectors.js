import { getType } from './utils'

// eslint-disable-next-line import/prefer-default-export
export const isFetching = (state, type) => state[getType(type)] === true
