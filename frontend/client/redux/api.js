import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

class API {
  constructor() {
    this.baseUrl = 'api.localhost'
  }

  use(endpoints = []) {
    for (let i = 0, l = endpoints.length; i < l; i += 1) {
      this.createEndpoint(endpoints[i])
    }
  }

  createEndpoint({ name, method, url }) {
    const params = url
      .split('/')
      .filter(p => p.includes(':'))
      .map(p => p.replace(':', ''))

    this[name] = (options = {}) => {
      let parsedUrl = url

      for (let i = 0, l = params.length; i < l; i += 1) {
        const param = params[i]
        const value = options.colonParams[param]

        if (!value) {
          throw new Error(`colonParam ${param} is not valid`)
        }

        parsedUrl = parsedUrl.replace(`:${param}`, value)
      }

      return axios({
        method,
        url: `${options.baseUrl || this.baseUrl}${parsedUrl}`,
        ...options,
      })
    }
  }
}

const api = new API()

export default api
