import { Auth0Provider } from 'use-auth0-hooks';

// just fuckin with this guide: https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/
// trying to make a simple provider for an admin section of the site
const Provider = (props) => {
    const { redirectUri = 'http://localhost:3000' } = props;
    const { children } = props;

    return <Auth0Provider
        domain="heyanimedotshow.auth0.com"
        clientId="8H2vL22X6kb80ajW8CLQKgUxTPXHbniw"
        redirectUri={redirectUri}
    >
        {children}
    </Auth0Provider>;
};

export default Provider;
