import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Here, you can perform login authentication (e.g., sending the data to a server for verification)
    // For demonstration purposes, let's assume the login is successful
    const isLoggedIn = true;

    if (isLoggedIn) {
      // Redirect the user to the dashboard page upon successful login
      // Replace 'dashboard' with the appropriate route defined in your React Router configuration
      window.location.href = '/dashboard';
    } else {
      // Display an error message or perform other actions for unsuccessful login
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row justify-content-center mt-5" style={{height: '500px'}}>
        <div className="col-xxl-8" style={{ width: '800px',height: '550px'}}> {/* Adjusted column width */}
          <div className="card border rounded shadow">
            <div className="card-header">
              <h2 className="text-center mb-0">Login</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="text-center mt-3">
                  Don't have an account?{' '}
                  <Link to="/create-account" className="create-account-link">
                    Create one
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
