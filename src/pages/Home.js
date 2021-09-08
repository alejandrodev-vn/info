import React from 'react';
import Header from '../components/Header';
import Info from '../components/Info';
import Projects from '../components/Projects';

Home.propTypes = {};

function Home() {
  return (
    <>
      <Header imageUrl="/images/banner.png" />
      <Info />
      <Projects />
    </>
  );
}

export default Home;
