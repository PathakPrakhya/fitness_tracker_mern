import React from 'react';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (
    <div className="container-fluid" style={{ backgroundImage: "url('/home2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="jumbotron bg-light rounded-lg p-5" style={{ borderRadius: '25px' }}>
        <h1 className="display-3 text-center mb-4"><b>Welcome to Fitty-Fitness Tracker</b></h1>
        <p className="display-6 text-center mb-4"><b>Track your fitness journey with ease.</b></p>
        <div className="d-flex justify-content-center">
          <Link to="/login" className="btn btn-primary btn-lg" style={{ minWidth: '200px', borderRadius: '25px', backgroundColor: '#D2B48C', borderColor: '#D2B48C' }}>Login</Link> 
        </div>
      </div>
    </div>
  );
}

export default HomePage;
