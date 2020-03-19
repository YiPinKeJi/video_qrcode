import axios from 'axios';
import promise from 'es6-promise';
import store from '../store';

let cancelSource = null;

// var isOnline =  true
promise.polyfill();

axios.defaults.baseURL = window.publicSecurityConfig.remoteUrl;
axios.defaults.timeout = 120000; // 配置axios拦截请求和响应的设置, 请求超时时间
axios.defaults.headers = {'Content-Type':'application/json;charset=UTF-8'};

axios.interceptors.request.use(config => {
    if (!config.data) {
      config.data = {}
    }
    const token = store.state.token ? store.state.token : sessionStorage.getItem('token');
    if (!config.url.includes('login')) {
        config.headers.Authorization = token;
    }
    return config;
});

axios.interceptors.response.use(res => {
    // 拦截token认证, token失效或已过期需要重新认证
    // if (res.status >= 500){
    //   console.log('服务出错')
    // }
    // if (res.data.resultCode === ERROR_MSG.TOKEN_ERROR) {
    //   store.commit('SET_TOKEN_EXPIRE', true);
    //   Vue.prototype.$msg(NORMAL_MSG.TOKEN_INVALID,{ loadingIcon: true, timeout: 2500 });
    // }
    if (res.data.message === '未授权') { // 如果token过期或者token不对时
      router.push({path: '/login'});
      return;
    }
    if (res.headers.authorization) {
      store.commit('SET_TOKEN',res.headers.authorization);
      store.commit('SET_TOKEN_EXPIRE', false);
      // eventBus.emit('onClose',false)
    }
    return res;
}, error => {
    return Promise.reject(error);
});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
*/
export function get(url, params) {
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
        })
    });
};

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时url携带的参数]
 */
export function post(url, bodyParams, queryParams ) {
    const config = {
        url,
        method: 'post'
    };
    if (queryParams) {
        config.params = queryParams
    }
    if (bodyParams) {
        config.data = bodyParams;
    }
    return new Promise((resolve, reject) => {
        axios(config)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
};

