import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '/@/router'
import { store } from '/@/store'

import Antd from 'ant-design-vue'
import('ant-design-vue/es/style')

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Antd)

app.mount('#app')
