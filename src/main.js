import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import store from '/store'; // 上で作成した Vuex ストアをインポート
// import InfiniteLoading from '/vue-infinite-scroll';


const app = createApp(App);
app.use(router)
app.use(store);
app.mount('#app');