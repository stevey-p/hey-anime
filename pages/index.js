import React, { useEffect, useState } from 'react';
import Head from '../components/head';

const Home = () => {
  return (
    <div>
      <Head title="[Hey, Anime!] - Home" />

      <div className="hero">
        <h1 className="title">Hey, Anime!</h1>
      </div>

      <div className="row">
        <p className="copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
          background-color: #f1f1f1;
        }
        .title {
          margin: 0;
          width: 25%;
          padding-top: 180px;
          line-height: 1.15;
          font-size: 48px;
          margin: 0 auto;
          white-space: nowrap;
        }
        .title {
          text-align: center;
          font-family: 'Righteous', cursive;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .copy {
          font-family: 'Karla', sans-serif;
          line-height: 2.25;
        }
        .copy ::first-word {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Home;
