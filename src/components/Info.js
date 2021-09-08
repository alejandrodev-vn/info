/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import Title from './Title';
import { DarkModeContext } from '../contexts/DarkModeContext';
Info.propTypes = {};

function Info() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <section
        className="container h-screen h-xs-180vh"
        style={{ marginBottom: '5rem' }}
        data-scroll-section
      >
        <Title title="INFOMATION" />
        <div
          className="info-wrapper w-full row justify-center items-center"
          style={{ height: '80%' }}
        >
          <figure
            className="col-md-4 h-full"
            data-scroll
            data-scroll-speed="4"
            data-scroll-repeat
          >
            <img
              className="w-full h-full magic-hover"
              src="/info/images/avt.jpg"
              alt="avatar"
            />
          </figure>
          <div
            className="col-md-5 info"
            data-scroll
            data-scroll-speed="4"
            data-scroll-repeat
            style={isDarkMode ? {} : { color: '#000' }}
          >
            <h6 className="info__name magic-hover">NGUYEN TRA THANH HUY</h6>
            <div className="info__content magic-hover">
              <p className="left">The Major:</p>
              <p className="right">Front-end Web Developer</p>
            </div>
            <div className="info__content magic-hover">
              <p className="left">Date of Birth:</p>
              <p className="right">04/26/2001</p>
            </div>
            <div className="info__content magic-hover">
              <p className="left">Education:</p>
              <p className="right">FPT Polytechnic HCM</p>
            </div>
            <div className="info__content magic-hover">
              <p className="left">Profile:</p>
              <p className="right">
                Innovative Front End Developer with 2 years experience building
                and maintaining responsive websites in the recruiting industry.
                Proficient in HTML, CSS, SASS, jQuery, JavaScript modern
                libraries. Frameworks: Angular2+ and ReactJs. Passionate about
                usability and possess working knowledge a little of Adobe
                Photoshop & Figma.
              </p>
            </div>
            <div className="info__content magic-hover">
              <p className="left">Skills:</p>
              <div className="right flex flex-col">
                <p>
                  - Front-end: HTML, CSS, SASS, Javacript, Bootstrap,
                  Tailwindcss, Jquery and more libraries...
                </p>
                <p>- Back-end: NodeJs + ExpressJs.</p>
                <p>- Frameworks: Angular2+ and ReactJs (React Hook) + Redux</p>
                <p>- Database: MongoDB + Mongoose, mySQL, SQL Server.</p>
                <p>- Manage Source: Github, GitKraken</p>
                <p>- Design: PSD, Figma.</p>
              </div>
            </div>
            <div className="info__content magic-hover">
              <p className="left">Work experience:</p>
              <p className="right">VTC Smarttech</p>
            </div>
            <div className="w-full mt-3 flex flex-row justify-center items-center flex-wrap">
              <a
                className="btn btn-info me-2 flex flex-row items-center magic-hover mb-1"
                target="_blank"
                href="https://github.com/thanhhuy264"
              >
                Github
                <AiFillGithub className="ms-1" />
              </a>
              <a
                target="_blank"
                className="btn btn-info me-2 flex flex-row items-center magic-hover mb-1"
                href="https://www.facebook.com/nguyentrathanhhuy2604/"
              >
                Facebook
                <FaFacebook className="ms-1" />
              </a>
              <a
                download
                className="btn btn-info me-2 flex flex-row items-center magic-hover mb-1"
                href="/cv/Fresher_NguyenTraThanhHuy.pdf"
              >
                Download CV
                <BsDownload className="ms-1" />
              </a>
              <a
                download
                className="btn btn-info me-2 flex flex-row items-center magic-hover mb-1"
                href="/cv/bangdiem.pdf"
              >
                Download Transcript
                <BsDownload className="ms-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Info;
