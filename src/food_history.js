import React from 'react';
import Navbar from './Navbar'; // Import the common navbar component

function FoodHistory() {
  // Retrieve food consumptions from session storage
  const foodConsumptions = JSON.parse(sessionStorage.getItem('foodConsumptions')) || [];

  return (
    <div>
      <Navbar />
      <h1 className="text-center">Food Consumption History</h1>
      <div id="food-table" className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Calories Consumed</th>
              <th>Meal Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {foodConsumptions.map((food, index) => (
              <tr key={index}>
                <td>{food.item}</td>
                <td>{food.calories}</td>
                <td>{food.mealTime}</td>
                <td>{food.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodHistory;
