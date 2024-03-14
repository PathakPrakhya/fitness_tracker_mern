import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-between">
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add_exercise">Add Exercise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exercise_history">Exercise History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add_food">Add Food</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calorie_intake_history">Calorie Intake History</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="profile-icon">User1</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/profile">Profile</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/logout">Logout</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
