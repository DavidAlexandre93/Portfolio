import Script from 'next/script';
import { Navbar } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src='https://unpkg.com/gsap@3.12.5/dist/gsap.min.js' strategy='afterInteractive' />
      <Script src='https://unpkg.com/gsap@3.12.5/dist/ScrollTrigger.min.js' strategy='afterInteractive' />
      <Script src='https://unpkg.com/@motionone/dom@10.18.0/dist/motion-one.umd.js' strategy='afterInteractive' />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
