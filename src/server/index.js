import Vue from 'vue'
import Axios from 'axios'

var axiosConfig = Axios.create({
  //baseURL: 'http://101.207.139.80:8887/', //本地
  baseURL: 'http://192.168.20.133:8080/drive/',
  timeout: 3000, //所有请求30s后过期
  withCredentials: true, //跨域凭证
});

export default axiosConfig;