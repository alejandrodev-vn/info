import React, { useContext } from 'react';
import { BiMouse } from 'react-icons/bi';
import { DarkModeContext } from '../contexts/DarkModeContext';
Header.propTypes = {};

function Header(props) {
  const { imageUrl } = props;
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      className={`header container ${isDarkMode ? '' : 'light-mode'}`}
      data-scroll-section
    >
      <figure
        className="header__img magic-hover"
        data-scroll
        data-scroll-repeat
        data-scroll-speed="2"
      >
        <img
          src={imageUrl}
          style={{ objectFit: 'contain' }}
          width="400px"
          height="400px"
          alt="header"
        />
      </figure>
      <div className="header__hero" id="hero">
        <h1
          className="title opacity-0 magic-hover"
          data-scroll-class="opacity-on-scroll"
          data-scroll
          data-scroll-repeat
          data-scroll-speed="5"
          data-scroll-direction="#hero"
        >
          Fresher Front-end Developer
        </h1>
        <p
          data-scroll-class="opacity-on-scroll"
          className="description opacity-0 magic-hover"
          data-scroll
          data-scroll-repeat
          data-scroll-speed="10"
          data-scroll-direction="#hero"
        >
          Hello my name is Harry. I'm a web developer and i love ReactJs
        </p>
        <span
          className="scroll-down opacity-0 magic-hover"
          data-scroll
          data-scroll-class="opacity-on-scroll"
          data-scroll-repeat
          data-scroll-speed="5"
          data-scroll-direction="#hero"
        >
          <BiMouse className="mt-2" />
          scroll down
        </span>
      </div>
    </section>
  );
}

export default Header;
