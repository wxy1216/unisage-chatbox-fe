import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import axios from "./api/axios"; // 导入封装后的 axios 实例
const app = createApp(App);

app.use(Antd).use(router);
app.mount("#app");
// 将 axios 实例挂载到全局属性中
app.config.globalProperties.$axios = axios;
