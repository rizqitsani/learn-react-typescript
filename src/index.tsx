import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import theme from './theme';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
