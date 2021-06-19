import Axios from 'axios'
import Qs from 'qs'
import Message from '../message/message'

Axios.defaults.baseURL = process.env.SERVER_URL
Axios.defaults.timeout = 2000
Axios.defaults.responseType = 'json'
Axios.defaults.maxContentLength = 2000
Axios.defaults.maxBodyLength = 2000
Axios.defaults.maxRedirects = 1

export const KeycapAxiosInstance = Axios.create(
  {
    transformResponse: [function (data) {
      return data
    }],
    // transformRequest: [function (data, headers) {
    transformRequest: [function (data) {
      return data
    }],
    paramsSerializer: function (params) {
      return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
    validateStatus: function (status) {
      return status >= 200 && status < 300
    }
  }
)

KeycapAxiosInstance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

KeycapAxiosInstance.interceptors.response.use(function (response) {
  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject()
  }
}, function (error) {
  Message.error(JSON.parse(JSON.stringify(error)).message)
  return Promise.reject(error)
})
