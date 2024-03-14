import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

function CreateAccount() {
  // Define state variables for form fields and success message
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [calories, setCalories] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Construct account object
    const account = {
      fullname: fullname,
      username: username,
      password: password,
      age: age,
      height: height,
      weight: weight,
      calories: calories
    };

    // Save user information to local storage
    localStorage.setItem('user', JSON.stringify(account));

    // Display success message and clear form fields
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      // Redirect to login page after success
      window.location.href = '/login';
    }, 2000);

    // Clear form fields
    setFullname('');
    setUsername('');
    setPassword('');
    setAge('');
    setHeight('');
    setWeight('');
    setCalories('');
  };

  return (
    <div className="container account-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" className="form-control" id="fullname" placeholder="Enter full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" className="form-control" id="age" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="height">Height (in cm)</label>
          <input type="number" className="form-control" id="height" placeholder="Enter height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (in kg)</label>
          <input type="number" className="form-control" id="weight" placeholder="Enter weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Approx. Daily Calorie Intake</label>
          <input type="number" className="form-control" id="calories" placeholder="Enter calorie intake" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Create Account</button>
        {successMessage && <p className="success-message">Account successfully created!</p>}
      </form>
    </div>
  );
}

export default CreateAccount;
