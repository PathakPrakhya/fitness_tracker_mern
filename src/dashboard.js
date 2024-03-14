import React from 'react';
import Navbar from './navbar'; // Assuming Navbar.js is in the same directory as Dashboard.js

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="container transparent-container">
        <h2>Welcome to Fitty!</h2>
        <p>A journey of a thousand miles begins with a single step</p>
      </div>
    </div>
  );
}

export default Dashboard;
