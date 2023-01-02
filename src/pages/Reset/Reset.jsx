import React from 'react';

import './Reset.css';

const Reset = () => {
  return (
    <div className="reset-container">
      <div className="reset-password">
        <h1>Reset your password</h1>
        <h6>
          To receive a link to reset your password, please enter your email
          address.
        </h6>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="example@gmail.com" />
        <button>Rset Password</button>
        <a href="/login">Go back to Login</a>
      </div>
    </div>
  );
};

export default Reset;
