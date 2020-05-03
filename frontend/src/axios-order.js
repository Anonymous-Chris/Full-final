import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://tutoring-4557d.firebaseio.com/'
});

export default instance