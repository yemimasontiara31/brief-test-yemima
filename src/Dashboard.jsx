// Dashboard.js
import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <img src={user.imageUrl} alt="Profile" />
      {/* Tampilkan detail lainnya sesuai kebutuhan */}
    </div>
  );
};

export default Dashboard;
