import './main.css';
import './tailwind.css'

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"

import App from './App';
import store from './redux/store';

// recoiljs
import {RecoilRoot} from 'recoil'

//react query
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'

export const queryclient = new QueryClient();

ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryclient}>
          <RecoilRoot>
          <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
          </ChakraProvider>
          </RecoilRoot>
        </QueryClientProvider>
    </Provider>, document.getElementById('root')
);
