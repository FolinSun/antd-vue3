import { createApp } from 'vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

import App from './App.vue';
import router from './router';
import store from './store';
import './assets/global.less';
import './permission';

// const app = createApp(App);
const app: ReturnType<typeof createApp> = createApp(App);

app.use(Antd);
app.use(store).use(router).mount('#app');
