import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://music-blog-app.firebaseio.com/' // when we add authentication, we'll also use a diff URL so no need to set this one as global
});

export default instance;