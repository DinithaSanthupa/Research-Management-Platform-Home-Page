import { useState } from 'react';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  return (
    <div className="login">
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div class="txt_field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
