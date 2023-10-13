/*
// SignUpForm.js
import React from 'react';
import './SignUpForm.css';
import EditIcon from '@mui/icons-material/Edit';

class SignUpForm extends React.Component {
  render() {
    return (
      <section id="a">
        <div className="signup-header">
          <h2 align="center">
            SIGN UP
            <EditIcon className="edit-icon" />
          </h2>
        </div>
        <form id="signupForm" action="http://127.0.0.1:5500/src/js/portfolio.html">
          <div className="form-group">
            <label htmlFor="name">
              Name:
            </label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="branch">Branch:</label>
            <input type="text" id="branch" placeholder="Enter your branch" required />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" required>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your Password" required />
          </div>

          <div className="form-group">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </section>
    );
  }
}

export default SignUpForm;

*/


import React from 'react';
import './SignUpForm.css';
import EditIcon from '@mui/icons-material/Edit';

class SignUpForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const branch = formData.get('branch');
    const gender = formData.get('gender');
    const dob = formData.get('dob');
    const email = formData.get('email');
    const password = formData.get('password');

    console.log('Form data submitted:', {
      name,
      branch,
      gender,
      dob,
      email,
      password,
    });
  };

  render() {
    return (
      <section id="a">
        <div className="signup-header">
          <h2 align="center">
            SIGN UP
            <EditIcon className="edit-icon" />
          </h2>
        </div>
        <form id="signupForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="branch">Branch:</label>
            <input type="text" id="branch" name="branch" placeholder="Enter your branch" required />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" required>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password" required />
          </div>

          <div className="form-group">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </section>
    );
  }
}

export default SignUpForm;
