// pages/_app.tsx

import '../public/styles/globals.css'; // Adjust the path to the location of your globals.css file

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp;
