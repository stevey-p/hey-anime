import Provider from '../components/auth0/provider'

// https://nextjs.org/docs/advanced-features/custom-app
const HeyAnimeDotShow = ({ Component, pageProps }) => {
    return <Provider>
        <Component {...pageProps} />
    </Provider>
};

export default HeyAnimeDotShow;