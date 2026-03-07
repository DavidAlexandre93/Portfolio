import React from 'react';
import { Navbar } from '../components';
import { I18nProvider } from '../context/I18nContext';
import Home from '../pages/index';
import Resume from '../pages/resume';
import Crypto from '../pages/crypto';
import Netflix from '../pages/netflix';
import Property from '../pages/property';
import Twitch from '../pages/twitch';
import NotFoundPage from '../pages/404';
import { RouterProvider, useRouter } from './router';
import '../styles/globals.css';

const RouteContent = () => {
  const { path } = useRouter();
  const pathname = path.split('#')[0];

  if (pathname === '/') return <Home />;
  if (pathname === '/resume') return <Resume />;
  if (pathname === '/crypto') return <Crypto />;
  if (pathname === '/netflix') return <Netflix />;
  if (pathname === '/property') return <Property />;
  if (pathname === '/twitch') return <Twitch />;
  if (pathname === '/404') return <NotFoundPage />;
  return <NotFoundPage />;
};

const App = () => (
  <RouterProvider>
    <I18nProvider>
      <Navbar />
      <RouteContent />
    </I18nProvider>
  </RouterProvider>
);

export default App;
