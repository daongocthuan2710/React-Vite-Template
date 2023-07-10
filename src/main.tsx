/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Librarys
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

// Store
import { store } from './store';

// Style
import './index.css';

// Components
import App from './app/modules';
import Counter from './app/modules/Counter';

const container = document.getElementById('root')!;
const root = createRoot(container);

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Counter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
