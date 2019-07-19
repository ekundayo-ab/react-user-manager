import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './UserModalForm.scss';

export default function UserModalForm({ handleModal }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatius] = useState('');

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !role || !status) {
      setError(true);
    } else {
      setError(false);
    }
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
        {error && <p className="errored-form">All fields must be filled!</p>}

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
              type="text"
              placeholder="Email"
              name="email"
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
};
