import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Garfish from 'garfish';
import configs from '../../../config.json'
// import './index.css'

ReactDOM.render(<App />, document.getElementById('root'));
const escapedApps = ['react-taste', 'vue3-taste', 'solidjs-taste', 'svelte-taste']

const apps = Object.keys(configs).filter(k => k !== 'main').map(k=>({
  name: configs[k].pkgName,
  activeWhen: k,
  entry: `http://localhost:${configs[k].port}`,
  sandbox: !escapedApps.includes(k) // vite下关闭沙箱
}))

Garfish.run({
  basename: '/',
  domGetter: '#container',
  apps
});