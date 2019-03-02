export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const getType = (type) => type.substr(0, type.length - 8)

export const getStatus = (type) => {
  const ret = type.substr(type.length - 7)

  if (![REQUEST, SUCCESS, FAILURE].includes(ret)) {
    // eslint-disable-next-line no-console
    console.error(`error: redux action type '${type}' is invalid`)
  }

  return ret
}
