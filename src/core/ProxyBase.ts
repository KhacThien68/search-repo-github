import axios from 'axios'

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  },
)

export default class ProxyBase {
  baseServiceUrl = ''

  constructor(url: string) {
    this.baseServiceUrl = url
  }

  get(path: string, data: any) {
    const url = this.baseServiceUrl + path
    const params = { ...data }

    const config = {
      params,
      timeout: 35000,
    }

    return axios.get(url, config).then((data) => {
      return data
    })
  }
}
