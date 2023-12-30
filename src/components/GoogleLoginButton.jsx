// GoogleLoginButton.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = '252260080628-ktrnsedgi6c24bf3qa2m9h6dacgrkqtb.apps.googleusercontent.com';

  const handleGoogleLogin = async (googleData) => {
    try {
      const response = await axios.post('https://api.goprestasi.com/api/login/google', {
        tokenId: googleData.tokenId,
      });

      // Assuming your API returns some user data upon successful login
      const userData = response.data;

      // Pass the user data to the onSuccess callback
      onSuccess(userData);
    } catch (error) {
      // Handle login failure
      onFailure(error);
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={handleGoogleLogin}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      redirectUri="http://localhost:3000/api/auth/google/callback"
    />
  );
};

export default GoogleLoginButton;
