import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { enableMockServiceWorker } from './mocks/browser';
import { AppEntry } from './pages/app';

const queryClient = new QueryClient();

enableMockServiceWorker().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} client={queryClient} />
        <AppEntry />
      </QueryClientProvider>
    </React.StrictMode>
  )
);
