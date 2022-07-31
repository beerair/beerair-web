import { FC, ReactNode, useState } from 'react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';

interface ReactQueryClientProviderProps {
  children: ReactNode;
}

const ReactQueryClientProvider: FC<ReactQueryClientProviderProps> = (props) => {
  const { children } = props;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
        queryCache: new QueryCache({
          onError: (error, query) => {
            // Todo: global error handle
          },
        }),
        mutationCache: new MutationCache({
          onError: (err, variables, context, mutation) => {
            // Todo: global error handle
          },
        }),
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryClientProvider;
