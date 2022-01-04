import axios from 'axios';

const $axios = axios.create({
    baseUrl: 'http://localhost:800/api',
});

$axios.interceptor.request.use(
    async (config) => {
        const token = localStorage.getItem('access_token');
        config.headers = {
            authorization: 'JWT ' + token,
        };

        return config;
    },
    (error) => Promise.reject(error)
);

$axios.interceptor.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalReq = error.config;
        if (error.respose.status === 401 && !originalReq._retry) {
            originalReq._retry = true;

            const access_token = await axios.post('/user/refresh');

            axios.defaults.headers.authorization = 'JWT ' + access_token;
            return $axios(originalReq);
        }
        return Promise.reject(error);
    }
);

export default $axios;

// const {data} = await $axios('/problem/${id}')
