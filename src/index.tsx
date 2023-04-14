import 'lib-flexible'; // 采用淘宝flexible布局

import { StrictMode, Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Loading from '@/components/Loading';

import App from './App';
import '@/assets/styles/index.less';

// console.log('NODE_ENV', process.env.NODE_ENV);
// console.log('BASE_ENV', process.env.BASE_ENV);
// console.log('process.env', process.env);
const rootElement = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <Suspense fallback={<Loading />}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Suspense>
);
