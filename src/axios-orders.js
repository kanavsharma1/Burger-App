import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-app-93421.firebaseio.com/"
});

export default instance;