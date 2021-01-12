import axios from 'axios';
const OMDB_URL = "http://www.omdbapi.com/";
const OMDB_API_KEY = "a7b58694";

const client = axios.create({
    baseURL: OMDB_URL,
    params: {
        apikey: OMDB_API_KEY
    }
})

export default client;