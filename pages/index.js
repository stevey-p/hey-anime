import React from 'react';
import SplashLayout from '../components/layout/splash';
import { fonts } from '../components/theme';

const Home = () => {
  return (
    <SplashLayout title="[Hey, Anime!] - Home">
      <div className="copy-section">
        <p className="copy">
          Welcome! You've reached the (future) splash page of a podcast project called <strong>Hey, Anime!</strong> We've already started recording, although we haven't published any episodes just yet. When we do, of course we'll start begging all our friends to tell all their friends about it in our quest for The Most Internet Clout.&trade; Although truth be told this is essentially an excuse for us to chat excitedly about things we enjoy watching, so while we say we hope you enjoy it we mostly mean we hope <em>we</em> enjoy making it.
        </p>

        <p className="copy">But we hope you do enjoy it too. A little.</p>
      </div>

      <style jsx>{`
        .copy-section {
          margin: 0 0 40px;
        }
        .copy {
          font-family: 'Karla', sans-serif;
          line-height: 2.25;
          max-width: 90%;
          width: 880px;
          margin: 15px auto;
        }
      `}</style> 
    </SplashLayout>
  );
};

export default Home;
