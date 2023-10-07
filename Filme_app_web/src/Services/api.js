import axios from 'axios';

// Base da url : http://api.themoviedb.org/3
// url da api : /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

const api = axios.create({
    baseURL: 'http://api.themoviedb.org/3/'
})

export default api;