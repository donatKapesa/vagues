import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://music-blog-app.firebaseio.com/'
});

export default instance;