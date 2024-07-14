// import { useLocalStorage } from '@uidotdev/usehooks'
import axios, {Method, AxiosResponse} from 'axios'
import { tokenString } from '../helpers/Constants'
const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
})
// const request = (method: Method, url: string, )
export default api