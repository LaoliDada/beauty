/**
 * @description axios封装以及错误拦截器
 * @author liyi ycs
 * @exports $http
 */
import axios from 'axios';

const requests = axios.create({});

// 添加请求拦截器
requests.interceptors.request.use(
    function(config) {
        // before request todo
        return config;
    },
    function(error) {
        // before error todo
        return Promise.reject(error);
    }
);

// 添加响应拦截器
requests.interceptors.response.use(
    function(response) {
        // before response todo
        //接口异常处理
        if (response.data.code != 200 || response.data.status != 'success') {
            return Promise.reject(response.data);
        }
        return response.data ? Promise.resolve(response.data) : Promise.resolve({});
    },
    function(error) {
        // before response error todo
        return Promise.reject(error);
    }
);

export default requests;