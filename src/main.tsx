import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { Auth0Provider } from '@auth0/auth0-react';
import { config } from 'dotenv';

config();

const domain = process.env.DOMAIN;
const clientId = process.env.CLIENT_ID;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Auth0Provider
      domain={`${domain}`}
      clientId={`${clientId}`}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
