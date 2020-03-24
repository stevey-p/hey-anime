import { Auth0Provider } from 'use-auth0-hooks';
import Router from 'next/router';

// just fuckin with this guide: https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/
// trying to make a simple provider for an admin section of the site

/**
 * Where to send the user after they have signed in.
 */
const onRedirectCallback = appState => {
    if (appState && appState.returnTo) {
      Router.push({
        pathname: appState.returnTo.pathname,
        query: appState.returnTo.query
      })
    }
  };
  
  /**
   * When it hasn't been possible to retrieve a new access token.
   * @param {Error} err 
   * @param {AccessTokenRequestOptions} options 
   */
  const onAccessTokenError = (err, options) => {
    console.error('Failed to retrieve access token: ', err);
  };
  
  /**
   * When signing in fails for some reason, we want to show it here.
   * @param {Error} err 
   */
  const onLoginError = (err) => {
    Router.push({
      pathname: '/oops',
      query: {
        message: err.error_description || err.message
      }
    })
  };
  
  /**
   * When redirecting to the login page you'll end up in this state where the login page is still loading.
   * You can render a message to show that the user is being redirected.
   */
  const onRedirecting = () => {
    return (
      <div>
        <h1>Signing you in</h1>
        <p>
          In order to access this page you will need to sign in.
          Please wait while we redirect you to the login page...
        </p>
      </div>
    );
  };

const Provider = (props) => {
    const { children } = props;
    return <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        clientId={process.env.AUTH0_CLIENT_ID}
        redirectUri={process.env.REDIRECT_URI}
        onRedirectCallback={onRedirectCallback}
        onAccessTokenError={onAccessTokenError}
        onRedirecting={onRedirecting}
        onLoginError={onLoginError}
    >
        {children}
    </Auth0Provider>;
};

export default Provider;
