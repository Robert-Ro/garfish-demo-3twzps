import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Garfish from 'garfish';
import configs from '../../../config.json'

ReactDOM.render(<App />, document.getElementById('root'));

const apps = Object.keys(configs).filter(k => k !== 'app-main').map(k=>({
  name: configs[k].pkgName,
  activeWhen: k,
  entry: `http://localhost:${configs[k].port}`,
  sandbox: k !== 'vue3-taste' // vite下关闭沙箱
}))

Garfish.run({
  basename: '/',
  domGetter: '#container',
  apps
});