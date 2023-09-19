import axios from "axios";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'



axios.defaults.baseURL = 'http://192.168.0.121:8081'; // 设置基本的URL
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做一些处理
  return config;
}, function (error) {
  // 对请求错误做处理
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // 对响应数据做处理
  return response;
}, function (error) {
  // 对响应错误做处理
  return Promise.reject(error);
});

const app = createApp(App)
// 获取特定的 cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

// 设置全局属性 $cookies
app.config.globalProperties.$cookies = getCookie('token');
// 设置全局用户info
app.config.globalProperties.$info = getCookie('username');
app.config.globalProperties.$useravatar = getCookie('useravatar');

app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(UndrawUi)
app.mount('#app')
