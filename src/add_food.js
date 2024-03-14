import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Navbar from './Navbar'; // Import the common navbar component

function AddFood() {
  function addFood(event) {
    event.preventDefault();
    // Your addFood function logic here
    // ...
  }

  return (
    <div>
      <Navbar />
      <div className="container food-container">
        <h2 className="mb-4">Add Food Consumption</h2>
        <form onSubmit={addFood}>
          <div className="form-group">
            <label htmlFor="food-input">Food Item</label>
            <input type="text" className="form-control" id="food-input" placeholder="Enter food item" />
          </div>
          <div className="form-group">
            <label htmlFor="calories">Calories Consumed</label>
            <input type="number" className="form-control" id="calories" placeholder="Enter calories" />
          </div>
          <div className="form-group">
            <label htmlFor="meal-time">Meal Time</label>
            <input type="time" className="form-control" id="meal-time" />
          </div>
          <div className="form-group">
            <label htmlFor="food-date">Date</label>
            <input type="date" className="form-control" id="food-date" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
            <p className="success-message">Food consumption successfully added!</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFood;
