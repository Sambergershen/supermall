import axios from 'axios'

axios.defaults.timeout = 5000
let url = ''

axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

// 首页
export const getHomeMultiData = params => {
  return axios.get(`${url}/home/multidata`, { params: params }).then(res => res.data)
}

export const getHomeGoods = params => {
  return axios.get(`${url}/home/data`, { params: params }).then(res => res.data)
}
