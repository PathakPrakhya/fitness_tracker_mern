import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

function Logout() {
  return (
    <div className="container logout-container">
      <h2 className="mb-4">Logout Successful!</h2>
      <div className="alert alert-success" role="alert">
        You have successfully logged out.
      </div>
      <p className="logout-message"> <Link to="/login">Login again</Link></p>
    </div>
  );
}

export default Logout;
