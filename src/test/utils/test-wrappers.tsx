import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';

export const queryClientInstance: FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export const queryClientWrapper = (children: ReactNode) => {
  return queryClientInstance({ children });
};
