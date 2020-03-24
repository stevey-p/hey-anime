const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    env: {
        API_BASE_URL: 'http://localhost:3001',
        AUTH0_DOMAIN: 'heyanimedotshow.auth0.com',
        AUTH0_CLIENT_ID: '8H2vL22X6kb80ajW8CLQKgUxTPXHbniw',
        REDIRECT_URI: 'http://localhost:3000/',
        POST_LOGOUT_REDIRECT_URI: 'http://localhost:3000/'
    }
});