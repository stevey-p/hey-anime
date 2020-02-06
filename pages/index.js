import React from 'react';
import Head from '../components/head';

const Home = () => {
  return (
    <div>
      <Head title="[Hey, Anime!] - Home" />

      <div className="hero">
        <img className="banner-logo" src="/logo.svg" />
      </div>

      <div className="copy-content">
        <p className="copy">
          Welcome! You've reached the (future) splash page of a podcast project called <strong>Hey, Anime!</strong> We've already started recording, although we haven't published any episodes just yet. When we do, of course we'll start begging all our friends to tell all their friends about it in our quest for The Most Internet Clout.&trade; Although truth be told this is essentially an excuse for us to chat excitedly about things we enjoy watching, so while we say we hope you enjoy it we mostly mean we hope <em>we</em> enjoy making it.
        </p>

        <p className="copy">But we hope you do enjoy it too. A little.</p>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          background-color: #4AA6DB;
          text-align: center;
          background-image: url('anime-banner.jpg');
          background-position: center;
          background-repeat: no-repeat;
        }
        .banner-logo {
          padding-top: 280px;
          margin-bottom: -53px;
          max-width: 90%;
        }
        .title {
          text-align: center;
          font-family: 'Righteous', cursive;
        }
        .copy-content {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: column;
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
