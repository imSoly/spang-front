import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// axios.defaults.baseURL = "https://sipang.herokuapp.com/";
// axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

function signUpUser(payload) {
  return instance.post("/user", payload);
}

function signInUser(payload) {
  // function loginUser(payload) {
  return instance.post("/user/login", payload);
}

// function getUser() {
//   return instance.get("/user");
// }

export { signUpUser, signInUser };
