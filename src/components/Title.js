import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

Title.propTypes = {};

function Title(props) {
  const { title } = props;
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <h1
      className="title opacity-0 magic-hover"
      data-scroll-class="opacity-on-scroll"
      data-scroll
      data-scroll-repeat
      data-scroll-speed="7"
      data-scroll-direction="horizontal"
      style={isDarkMode ? {} : { color: '#000' }}
    >
      <span style={{ color: '#ff9438' }}>#</span>
      {title}
    </h1>
  );
}

export default Title;
