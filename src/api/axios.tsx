import axios, {Method, AxiosResponse} from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000'
})
// const request = (method: Method, url: string, )
export default api