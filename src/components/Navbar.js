/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { BiMoon } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { Link } from 'react-router-dom';

Navbar.propTypes = {};

function Navbar() {
  const { isDarkMode, handleChangeDarkMode } = useContext(DarkModeContext);
  return (
    <nav className={`navbar ${isDarkMode ? '' : 'light-mode'}`}>
      <Link to="/" className="navbar__logo magic-hover">
        {isDarkMode ? (
          <img src="/images/logo.png" alt="logo" />
        ) : (
          <img src="/images/logo-white.png" alt="logo" />
        )}
      </Link>
      <div className="flex flex-item items-center justify-center cursor-text">
        <a
          className="navbar__icons magic-hover"
          href="https://www.facebook.com/nguyentrathanhhuy2604/"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          className="navbar__icons magic-hover"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <AiFillInstagram />
        </a>
        <a
          className="navbar__icons magic-hover"
          href="https://github.com/thanhhuy264?tab=repositories"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <button
          type="button"
          onClick={handleChangeDarkMode}
          className="navbar__color-mode magic-hover"
        >
          <BiMoon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
