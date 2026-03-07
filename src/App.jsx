import React, { useEffect, useState } from 'react';
import { Navbar } from '../components';
import { I18nProvider } from '../context/I18nContext';
import Home from '../pages/index.jsx';
import Resume from '../pages/resume';
import Crypto from '../pages/crypto';
import Netflix from '../pages/netflix';
import Property from '../pages/property';
import Twitch from '../pages/twitch';
import NotFoundPage from '../pages/404.jsx';
import { RouterProvider, useRouter } from './router';
import '../styles/globals.css';

const RouteContent = () => {
  const { path } = useRouter();
  const pathname = path.split('#')[0].replace(/\/index\.html$/i, '') || '/';

  if (pathname === '/' || pathname === '') return <Home />;

  if (pathname === '/resume' || pathname.endsWith('/resume')) return <Resume />;
  if (pathname === '/crypto' || pathname.endsWith('/crypto')) return <Crypto />;
  if (pathname === '/netflix' || pathname.endsWith('/netflix')) return <Netflix />;
  if (pathname === '/property' || pathname.endsWith('/property')) return <Property />;
  if (pathname === '/twitch' || pathname.endsWith('/twitch')) return <Twitch />;
  if (pathname === '/404') return <NotFoundPage />;

  if (!pathname.includes('/')) return <Home />;

  return <NotFoundPage />;
};

const App = () => (
  <RouterProvider>
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  </RouterProvider>
);

const AppShell = () => {
  const [booting, setBooting] = useState(true);
  const { path } = useRouter();

  useEffect(() => {
    const timeout = window.setTimeout(() => setBooting(false), 1400);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || booting || !window.gsap) return;
    window.gsap.fromTo('.route-shell', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' });
  }, [path, booting]);

  return (
    <>
      <div className={`app-preloader ${booting ? 'app-preloader--active' : ''}`} aria-hidden={!booting}>
        <div className='app-preloader__pulse' />
      </div>
      <div className={`app-shell ${booting ? 'app-shell--hidden' : 'app-shell--visible'}`}>
        <Navbar />
        <main key={path} className='route-shell'>
          <RouteContent />
        </main>
      </div>
    </>
  );
};

export default App;
