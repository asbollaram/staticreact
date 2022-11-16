import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [ldata, setLdata] = useState({
    Username: '',
    Password: '',
    Cpassword: '',
  });
  const { Username, Password, Cpassword } = ldata;

  const loginHandler = (e) => {
    setLdata({ ...ldata, [e.target.name]: e.target.value });
  };
  const submitLogin = (e) => {
    e.preventDefault();
    if (Username.length <= 5) {
      alert('Username at least  letters');
    } else if (Password !== Cpassword) {
      alert('password not matched');
    } else {
      alert('login success');
    }
    console.log(ldata);
  };
  return (
    <div className="LoginMain">
      <h1>Login Here!</h1>
      <form className="login_form" onSubmit={submitLogin}>
        <label>Username</label>
        <input
          type="text"
          name="Username"
          placeholder="User name"
          value={Username}
          onChange={loginHandler}
        />
        {Username.length <= 5 ? (
          <span style={{ color: 'red', textAlign: 'left' }}>
            User name at least 5 letters
          </span>
        ) : null}
        <label>Password</label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={Password}
          onChange={loginHandler}
        />
        <label>Retype Password</label>
        <input
          type="password"
          name="Cpassword"
          placeholder=" Confirm Password"
          value={Cpassword}
          onChange={loginHandler}
        />
        {Password !== Cpassword ? (
          <span style={{ color: 'red' }}>Password and Confirm not matched</span>
        ) : null}
        <button type="submit" className="buttons">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
