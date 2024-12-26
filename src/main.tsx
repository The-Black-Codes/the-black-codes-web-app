import 'dotenv/config'
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.NX_PUBLIC_DOMAIN;
const clientId = process.env.NX_PUBLIC_CLIENT_ID;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Auth0Provider
      domain={`${domain}`}
      clientId={`${clientId}`}
      authorizationParams={{
        redirect_uri: 'http://localhost:4200/admin'
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
