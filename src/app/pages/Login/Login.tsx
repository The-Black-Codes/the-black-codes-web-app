import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButtons: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button style={{backgroundColor: 'lightblue', borderRadius: '5px', width: '100px', height: '50px'}} onClick={() => loginWithRedirect()}>Log In</button>
      ) : (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      )}
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <AuthButtons />
    </div>
  )
}

export default Login