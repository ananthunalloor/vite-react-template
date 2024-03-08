import React from 'react';
import ReactDOM from 'react-dom/client';

import { enableMockServiceWorker } from './mocks/browser';
import { AppEntry } from './pages/app';

enableMockServiceWorker().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AppEntry />
    </React.StrictMode>
  )
);
