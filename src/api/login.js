import axios from './axios';

export const getLogin = (params) => {
    axios.post('/api/demo/user/identity', {params});
};