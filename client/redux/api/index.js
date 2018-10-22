import API from './API'
import auth from './auth'

const api = new API()

api.use(auth)

export default api
