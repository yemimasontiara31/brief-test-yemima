// src/App.js
import React, { useState } from 'react';
import GoogleLoginButton from './components/GoogleLoginButton';
import UserProfile from './components/UserProfile';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  const handleLoginSuccess = (response) => {
    // Set accessToken setelah berhasil login
    setAccessToken(response.tokenId);
  };

  const handleLoginFailure = (error) => {
    // Log the details of the error
    console.error('Login failed:', error);
    console.error('Error details:', error.details);
  };
  

  const handleLogout = () => {
    // Hapus token akses dan set accessToken menjadi null saat logout
    setAccessToken(null);
  };

  return (
    <div class="flex flex-col items-center justify-center">
      <h1>Brief Test Yemima</h1>
      <div class="mt-[20px]">

        {!accessToken ? (
          <GoogleLoginButton
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
          />
        ) : (
          <div>
            <UserProfile accessToken={accessToken} />
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        
      </div>
      
    </div>
  );
};

export default App;