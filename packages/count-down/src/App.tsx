import { useEffect, useState, createContext } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AppInfo } from '@garfish/bridge-react-v18';
import { Layout } from '@arco-design/web-react';
import logo from './logo.svg';
import './App.less';
import { getWeekNumber } from '@liutsing/utils'

export const SubAppContext = createContext<AppInfo>({} as AppInfo);
const Content = Layout.Content;

export const prefixCls = 'sub-app-react18';

const App = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState('home');

  useEffect(() => {
    setIsActive(location.pathname.includes('about') ? 'about' : 'home');
  }, [location.pathname]);

  return (
    <SubAppContext.Consumer>
      {(appInfo) => {
        return (
          <Content>
            <div className="App">
              <header className="App-header">
                <p>Current Week No.{getWeekNumber()}</p>
                <ul>
                  <li onClick={() => setIsActive('home')}>
                    <NavLink
                      to="/home"
                      className={isActive === 'home' ? 'tabActive' : ''}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li onClick={() => setIsActive('about')}>
                    <NavLink
                      to="/about"
                      className={isActive === 'home' ? 'tabActive' : ''}
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </header>
              <Outlet />
            </div>
          </Content>
        );
      }}
    </SubAppContext.Consumer>
  );
};

export default App;
