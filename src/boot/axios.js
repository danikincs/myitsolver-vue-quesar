import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://proba.myitsolver.com/api'
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
