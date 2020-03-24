const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    env: {
        API_BASE_URL: process.env.API_BASE_URL || 'https://heyanime.show:3001',
        AUTH0_DOMAIN: 'heyanimedotshow.auth0.com',
        AUTH0_CLIENT_ID: '8H2vL22X6kb80ajW8CLQKgUxTPXHbniw',
        REDIRECT_URI: process.env.REDIRECT_URI || 'https://heyanime.show',
        POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI || 'https://heyanime.show'
    }
});