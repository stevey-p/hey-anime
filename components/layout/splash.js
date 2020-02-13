import globalStyles from '../styles/global.js';
import Head from '../head';
import { colors } from '../theme';

function Layout(props) {
    return (
        <div className="layout-splash">
            <Head title={props.title} />
            <div className="hero">
                <img className="banner-logo" src="/logo.svg" alt="Hey, Anime!" />
            </div>
            {props.children}
            <style jsx global>
                {globalStyles}
            </style>
            <style jsx>{`
                .hero {
                    width: 100%;
                    background-color: ${colors.accent};
                    text-align: center;
                    background-image: url('anime-banner.jpg');
                    background-position: center;
                    background-repeat: no-repeat;
                    margin-bottom: 80px;
                }
                .banner-logo {
                    padding-top: 280px;
                    margin-bottom: -53px;
                    max-width: 90%;
                }

                @media all and (max-width: 699px) {
                    .hero {
                      background-size: cover;
                      height: 100px;
                    }
                    .banner-logo {
                      padding-top: 0;
                      margin-bottom: -160px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Layout;