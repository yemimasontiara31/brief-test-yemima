// src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ accessToken, onLogout }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Mengambil detail pengguna setelah berhasil login
        const response = await axios.get(
          'https://api.goprestasi.com/api/setting',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Simpan data pengguna di state
        setUserProfile(response.data);
      } catch (error) {
        // Handle error
        console.error('Fetch User Profile Error:', error);
      }
    };

    // Panggil fungsi fetchUserProfile jika accessToken tersedia
    if (accessToken) {
      fetchUserProfile();
    }
  }, [accessToken]);

  const handleLogout = () => {
    // Panggil fungsi onLogout untuk menghapus token dan mengembalikan pengguna ke halaman login atau halaman awal aplikasi
    onLogout();
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {userProfile.name}</h2>
      <img src={userProfile.profilePicture} alt="Profile" />
      {/* Tampilkan detail lainnya sesuai kebutuhan */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
