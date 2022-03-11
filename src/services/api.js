import axios from 'axios';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTU3NzBiN2QxMGE2N2Q2NDQ1NjcxZjRiODM2YWZhYSIsInN1YiI6IjYyMWQwZDVmOTAyMDEyMDA2ZDNiZjlkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VN1WmftMmqZwDwH8A-9Vk-duujSCm1eE-MGi6YG6KM0';
export default axios.create({
  baseURL:'https://api.themoviedb.org/3',
  Headers: {
    Authorization: `Bearer ${token}`
  }
})