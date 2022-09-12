import './app.css'
import App from './App.svelte'

let app

interface parameter {
  dom: HTMLElement,
  basename: string
}
export const provider = () => ({
  // render 渲染函数，必须提供
  render: ({ dom, basename }: parameter) => {
    console.log(dom, basename)
    // 和子应用独立运行时一样，将子应用渲染至对应的容器节点，根据不同的框架使用不同的渲染方式
    app = new App({
      target: dom.querySelector('#app')
    })
  },
  // destroy 应用销毁函数，必须提供
  destroy: ({ dom, basename }: parameter) => {
    console.log(dom, basename)
    // 使用框架提供的销毁函数销毁整个应用，已达到销毁框架中可能存在得副作用，并触发应用中的一些组件销毁函数
    // 需要注意的时一定要保证对应框架得销毁函数使用正确，否则可能导致子应用未正常卸载影响其他子应用
      // FIXME dom ? dom.querySelector('#root') : document.querySelector('#root'),
  },
});

//@ts-ignore
if (window.__GARFISH__ && typeof __GARFISH_EXPORTS__ === "object" && __GARFISH_EXPORTS__) {
  //@ts-ignore
  __GARFISH_EXPORTS__.provider = provider;
}

if (!window.__GARFISH__) {
   app = new App({
    target: document.getElementById('app')
  })
 }

 export default app