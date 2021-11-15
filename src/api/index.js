import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

axios.defaults.baseURL = "https://sipang.herokuapp.com/";
axios.defaults.withCredentials = true;

// const instance = axios.create({
// 	baseURL: process.env.REACT_APP_URl
// })

function signUpUser(payload) {
  return axios.post('/user', payload)
} 

function loginUser(payload) {
  return axios.post('/user/login', payload)
}

function getUser() {
  return axios.get('/user')
}

export { signUpUser, loginUser, getUser }