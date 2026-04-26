import React from 'react';
import { useAuth } from '../AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <p>User ID: {user.id}</p>
        </div>
      ) : (
        <p>No user signed in.</p>
      )}
    </div>
  );
};

export default Profile;
