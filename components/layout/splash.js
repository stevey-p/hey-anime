import globalStyles from '../styles/global.js';
import Head from '../head';
import { colors } from '../theme';

function Layout(props) {
    return (
        <div className="layout-splash">
            <Head title={props.title} />
            <div className="hero" />
            <img className="banner-logo" src="/logo.svg" alt="Hey, Anime!" />
            {props.children}
            <style jsx global>
                {globalStyles}
            </style>
            <style jsx>{`
                .hero {
                    width: 100%;
                    height: 280px;
                    background-color: ${colors.accent};
                    text-align: center;
                    background-image: url('anime-banner.jpg');
                    background-position: center;
                    background-repeat: no-repeat;
                    margin-bottom: -64px;
                }
                .banner-logo {
                    margin: 0 auto;
                    max-width: 90%;
                }

                @media all and (max-width: 699px) {
                    .hero {
                      background-size: cover;
                      height: 100px;
                      margin-bottom: -44px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Layout;