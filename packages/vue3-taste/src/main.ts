import { createApp, h } from "vue";
import "./style.css";
import "virtual:windi.css";
import "virtual:windi-devtools";
import App from "./App.vue";
import {routes} from "./router";
import Antd, { message } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { vueBridge } from '@garfish/bridge-vue-v3';
import { createRouter, createWebHistory } from "vue-router";


function newRouter(basename) {
  const router = createRouter({
    history: createWebHistory(basename),
    routes,
  });
  return router;
}

export const provider = vueBridge({
  rootComponent: App,
  handleInstance: (vueInstance, { basename, dom, appName, props, appInfo}) => {
    vueInstance.use(newRouter(basename)).use(Antd);
    vueInstance.config.globalProperties.$message = message;
  },
  appOptions: () => ({
    el: '#app',
    render: () => h(App),
  }),
});

if (!window.__GARFISH__) {
  // 非微前端环境直接运行
  const vueInstance = createApp(App);
  vueInstance.config.globalProperties.$message = message;
  vueInstance.use(newRouter('/')).use(Antd)
  vueInstance.mount(document.querySelector('#app'));
}
