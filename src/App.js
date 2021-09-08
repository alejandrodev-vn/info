/* eslint-disable no-undef */
import 'bootstrap/dist/css/bootstrap.css';
import { magicMouse } from './assets/vendor/magic_mouse.js';
import LocomotiveScroll from 'locomotive-scroll';
import React, { useContext, useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { DarkModeContext } from './contexts/DarkModeContext';
import './scss/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home.js';

const locomotiveScroll = () => {
  new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
};
const handleMagicMouse = () => {
  magicMouse({
    cursorOuter: 'disable',
    hoverEffect: 'pointer-overlay',
    hoverItemMove: true,
    defaultCursor: false,
    outerWidth: 30,
    outerHeight: 30,
  });
};
function App() {
  const { isDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    locomotiveScroll();
    handleMagicMouse();
    return () => {
      locomotiveScroll();
      handleMagicMouse();
    };
  }, []);
  return (
    <Router>
      <div data-scroll-container className={isDarkMode ? '' : 'bg-white'}>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
          <Redirect from="**" to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
