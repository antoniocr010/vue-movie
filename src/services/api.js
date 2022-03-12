import axios from 'axios';
const token =
  'Token';
export default axios.create({
  baseURL:'https://api.themoviedb.org/3',
  Headers: {
    Authorization: `Bearer ${token}`
  }
})
