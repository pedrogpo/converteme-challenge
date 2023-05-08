import 'axios-cache-adapter'
import axios, { AxiosResponse } from 'axios'
import { handleError } from './errors'

export const rmApi = axios.create({
  baseURL: 'https://conecte.me/api/',
  cache: {
    maxAge: 15 * 60 * 1000, // 15 min
  },
})

rmApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: any) => {
    throw handleError(err)
  }
)
