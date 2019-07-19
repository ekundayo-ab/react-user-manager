import React from 'react';
import './UserCard.scss';

export default function UserCard() {
  return (
    <div className="user-card">
      <h3 className="card-item">John Doe</h3>
      <p className="card-item">johndoe@mail.com</p>
      <p className="card-item"><b>ID:</b> 8 </p>
      <p className="card-item"><b>Role:</b> Doctor</p>
      <p className="card-item"><b>Status:</b> Active</p>

      <button type="button" className="btn btn-primary card-item">Edit</button>
      <button type="button" className="btn btn-secondary card-item">Delete</button>
    </div>
  );
}
