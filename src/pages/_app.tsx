// pages/_app.tsx

import '../app/globals.css'; // Adjust the path to the location of your globals.css file

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp;
