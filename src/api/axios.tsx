// import { useLocalStorage } from '@uidotdev/usehooks'
import Axios from 'axios'
import { tokenString } from '../helpers/Constants'
const axios = Axios.create({
    baseURL: 'http://localhost:3000',
})
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem(tokenString);
    config.headers.Authorization = `Bearer ${token?.replaceAll('"', '')}`;
  
    return config;
  });
// const request = (method: Method, url: string, )
export default axios