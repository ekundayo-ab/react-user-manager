import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './UserModalForm.scss';

export default function UserModalForm({ handleModal, setUsers }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatius] = useState('');

  const [requiredError, setRequiredError] = useState(false);
  const [uniqueMailError, setUniqueMailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !role || !status) {
      setRequiredError(true);
      return;
    }
    setRequiredError(false);

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user =>
      user.email.toLowerCase().trim() === email.toLowerCase().trim());
    if (existingUser) {
      setUniqueMailError(true);
      return;
    }
    setUniqueMailError(false);

    // We can use this as their ID since the email is unique for each user
    const userId = email.split('@')[0];
    users.push({ id: userId, firstName, lastName, email, role, status });
    localStorage.setItem('users', JSON.stringify(users));
    setUsers(users);
  };

  return (
    <React.Fragment>
      <div
        className="modal-overlay"
        onKeyPress={() => handleModal(false)}
        onClick={() => handleModal(false)}
        role="button"
        tabIndex="0"
      />

      <div className="user-modal-form">
        <h3>Add New User</h3>
        {requiredError && <p className="errored-form">All fields must be filled!</p>}
        {uniqueMailError && <p className="errored-form">User with that email exists!</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={evt => setFirstName(evt.target.value)}
            />
          </div>

          <div className="form-control">
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={evt => setLastName(evt.target.value)}
            />
          </div>

          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={evt => setEmail(evt.target.value)}
            />
          </div>

          <select
            className="form-control"
            name="role"
            onChange={evt => setRole(evt.target.value)}
            value={role}
          >
            <option value="">--Select a role--</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
            <option value="accountant">Accountant</option>
          </select>

          <select
            className="form-control"
            name="status"
            onChange={evt => setStatius(evt.target.value)}
            value={status}
          >
            <option value="">--Select a status--</option>
            <option value="active">Active</option>
            <option value="inactive">InActive</option>
          </select>

          <div className="divider" />
          <button type="submit" className="btn btn-primary">Add</button>&nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => handleModal(false)}
          >Close
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

UserModalForm.propTypes = {
  handleModal: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
};
