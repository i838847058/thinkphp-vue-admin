import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import {success_, error_} from '@/utils/message.js'
import {get, post, deletes, put} from '@/layout/components/http.js'
import md5 from 'js-md5';
import VueAMap  from 'vue-amap';  //注意不要和 AMap原始名称覆盖

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

// Vue.use(VueAMap);
// // 初始化vue-amap
// VueAMap.initAMapApiLoader({
//   // 高德的key
//   key: 'you key',
//   // 插件集合
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
//   v: '1.4.4'
// });


Vue.prototype.$success_ = success_
Vue.prototype.$error_ = error_

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$deletes = deletes
Vue.prototype.$put = put
Vue.prototype.$md5 = md5;


// set ElementUI lang to EN
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
