import axios from 'axios';
import OMDB_API_KEY from '../config';
const OMDB_URL = "http://www.omdbapi.com/";

const client = axios.create({
    baseURL: OMDB_URL,
    params: {
        apikey: OMDB_API_KEY
    }
})

export default client;