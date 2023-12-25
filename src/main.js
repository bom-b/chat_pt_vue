import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global-style.css';

// 테이블 추가
// import 'vxe-table/lib/style.css';
// import VXETable from 'vxe-table';

/*부트스트랩*/
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// 구글 아이콘 사용
import 'material-icons/iconfont/material-icons.css';

const app = createApp(App);
app.use(router);
app.use(store);
// app.use(VXETable);
// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.mount('#app');
