import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Navbar from './navbar'; // Import the common navbar component

function AddExercise() {
  function addExercise(event) {
    event.preventDefault();
    // Your addExercise function logic here
    // ...
  }

  return (
    <div>
      <Navbar />
      <div className="container exercise-container">
        <h2 className="mb-4">Add Exercise</h2>
        <form onSubmit={addExercise}>
          <div className="form-group">
            <label htmlFor="exercise-select">Select Exercise</label>
            <select className="form-control" id="exercise-select">
              <option value="Running">Running</option>
              <option value="Cycling">Cycling</option>
              <option value="Swimming">Swimming</option>
              {/* Add more exercise options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (minutes)</label>
            <input type="number" className="form-control" id="duration" placeholder="Enter duration" />
          </div>
          <div className="form-group">
            <label htmlFor="exercise-date">Date</label>
            <input type="date" className="form-control" id="exercise-date" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
            <p className="success-message">Exercise successfully added!</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExercise;
