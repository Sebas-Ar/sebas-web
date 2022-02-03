import PropTypes from 'prop-types'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any
}

export default MyApp
