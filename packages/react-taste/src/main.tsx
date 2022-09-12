import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.css'

import { BrowserRouter } from 'react-router-dom'
// import { reactBridge } from '@garfish/bridge-react-v18';

const RootComponent =  () => <React.StrictMode>
<BrowserRouter>
  <App />
</BrowserRouter>
</React.StrictMode>

interface parameter {
  dom: HTMLElement,
  basename: string
}

export const provider = () => {
  let root: ReactDOM.Root | null = null;
  return {
    render({ basename, dom }: parameter) {
      const container = dom.querySelector('#root');
      root = ReactDOM.createRoot(container!);
      (root as any).render(<RootComponent />);
    },
    destroy({ dom }: parameter) {
      (root as any).unmount();
    },
  };
};

if (!window.__GARFISH__) {
  // 非微前端环境直接运行
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container!);
  root.render(<RootComponent />);
}