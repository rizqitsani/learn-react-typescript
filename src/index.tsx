import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import theme from './theme';
import { CartProvider } from './context';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
