import axios from 'axios'

class API {
  constructor() {
    if (!process.browser && process.env.NODE_ENV === 'production') {
      this.baseUrl = 'http://api:3000'
    } else {
      this.baseUrl = 'https://api.your.domain'
    }
    // this.baseUrl = 'http://localhost:3001'
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
