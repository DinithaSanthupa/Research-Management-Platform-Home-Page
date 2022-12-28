import React from 'react';
import { Link } from 'react-router-dom';

import './Welcome.css';

const WelcomeCard = (props) => {
  return (
    <div className="cards">
      <div className="card-img">
        <img src={props.imgsrc} alt="compnay" className="card-img-top" />
      </div>
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="card-footer">
        <div className="welcome-login-button">
          <Link to="/login">Login</Link>
        </div>
        <div className="welcome-register-button">Signup</div>
      </div>
    </div>
  );
};

export default WelcomeCard;
