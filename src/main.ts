import { createApp } from 'vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

// 全局公用样式
import './assets/global.less';

import App from './App.vue';
import router from './router';
import store from './store';

// const app = createApp(App);
const app: ReturnType<typeof createApp> = createApp(App);

app.use(store).use(router).use(Antd).mount('#app');
