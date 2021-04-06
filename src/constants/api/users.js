import axios from 'configs/axios';

export default {
  login: (credentials) => axios.post("/users/login", credentials),
};
