import { Navbar } from '../components';
import { I18nProvider } from '../context/I18nContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <I18nProvider>
      <Navbar />
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export function reportWebVitals(metric) {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const body = JSON.stringify({
    id: metric.id,
    name: metric.name,
    value: Math.round(metric.value),
    rating: metric.rating,
    navigationType: metric.navigationType,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/vitals', body);
    return;
  }

  fetch('/api/vitals', {
    body,
    method: 'POST',
    keepalive: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default MyApp;
