import React from 'react';
import PropTypes from 'prop-types';

import './UserList.scss';
import UserCard from './UserCard';

export default function UserList({ handleModal }) {
  return (
    <div className="user-list">
      <hr />
      <button
        type="button"
        className="add btn btn-primary"
        onClick={() => handleModal(true)}
      >
        Add New User
      </button>

      <hr />
      <hr />
      <h2>All Users</h2>
      <hr />

      <UserCard />
    </div>
  );
}

UserList.propTypes = {
  handleModal: PropTypes.func.isRequired,
};
