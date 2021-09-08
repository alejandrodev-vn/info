/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

Footer.propTypes = {};

function Footer() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <footer
      className={`container-fluid ${isDarkMode ? '' : 'light-mode'}`}
      data-scroll-section
    >
      <div className="flex flex-col justify-center items-center">
        <h5 className="magic-hover">
          Interested in working together? We should queue up a chat. I’ll buy
          the coffee!
        </h5>
        <h2 className="title magic-hover" style={{ fontStyle: 'italic' }}>
          huytra264@gmail.com
        </h2>
        <p className="magic-hover" style={{ fontSize: '1.5rem' }}>
          (+84) 7046330703
        </p>
        <img
          className="magic-hover"
          src="/images/signature-white.png"
          alt="signature"
        />
        <p className="magic-hover">
          Designed & Developed by Harry All rights reserved 2021
        </p>
        <small className="magic-hover">
          Idea:{' '}
          <a
            href="https://www.nghiatran.info/"
            style={{ color: 'white' }}
            target="_blank"
          >
            nghiatran.info
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
