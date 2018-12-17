export const REQUEST = 'REQUEST'
export const FAILURE = 'FAILURE'

export const getType = (type) => type.substr(0, type.length - 8)

export const getStatus = (type) => {
  const ret = type.substr(type.length - 7)

  if (![REQUEST, FAILURE].includes(ret)) {
    // eslint-disable-next-line no-console
    console.warn(`Reducer \`error\`: type ${type} is invalid`)
  }

  return ret
}
