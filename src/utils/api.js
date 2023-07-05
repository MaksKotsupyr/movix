import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWU3N2E0ODJkZDQ2NjQ2ZDEzY2M0ODUxNGM4ZGZiZCIsInN1YiI6IjY0YTUzMWIzYTBiZTI4MDEyZWVmOTgxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uc1_iDujgsmn5NYFyZsgRozJ2AOzi0zCsbUc1xicQ3Y';

const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN,

}

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            params,
            headers
        });
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}