import '../public/styles/globals.css'; // Adjust the path to the location of your globals.css file
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}