import React from 'react';
import PropTypes from 'prop-types';

import './UserCard.scss';

export default function UserCard({ handleDelete, user }) {
  return (
    <div className="user-card">
      <h3 className="card-item">{user.firstName} {user.lastName}</h3>
      <p className="card-item">{user.email}</p>
      <p className="card-item"><b>ID:</b> {user.id.toUpperCase()} </p>
      <p className="card-item"><b>Role:</b> {user.role.toUpperCase()}</p>
      <p className="card-item"><b>Status:</b> {user.status}</p>

      <button type="button" className="btn btn-primary card-item">Edit</button>
      <button
        type="button"
        className="btn btn-secondary card-item"
        onClick={evt => handleDelete(evt, user.id)}
      >Delete
      </button>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
