import React, { useContext, useState } from 'react'
import MyContex from '../context/Context';
import { useNavigate } from 'react-router-dom';

function Log() {


  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //יבוא הקונטקסט
  const { register, login } = useContext(MyContex);
  const onLogin = () => {
    if (login(email, password)) {
      nav("/");
    }
    else {
      setIslogin(false);
    }
  };
  const onRegister = () => {
    const newUser = { userName: name, email, password };
    if (register(newUser)) {
      nav("/");
    }
  };
  
  const [islogin, setIslogin] = useState(true);
  const toggleForm = () => {
    setIslogin(!islogin);
  };


  return (
    <div className="log-container">
      <div className={`form-box ${islogin ? "show-login" : "show-register"}`}>
        <div className="form">
          <div
            className={`login-form ${islogin ? "active" : "inactive"}`} aria-hidden={!islogin}>
            <h2>התחברות</h2>
            <input type="text" placeholder="Email" onChange={e => { setEmail(e.target.value) }} />
            <input type="password" placeholder="Password" onChange={e => { setPassword(e.target.value) }} />
            <button onClick={() => onLogin()}>התחבר</button>
          </div>
          <div
            className={`register-form ${!islogin ? "active" : "inactive"}`} aria-hidden={islogin}>
            <h2>הרשמה</h2>
            <input type="text" placeholder="Username" onChange={e => { setName(e.target.value) }} />
            <input type="email" placeholder="Email" onChange={e => { setEmail(e.target.value) }} />
            <input type="password" placeholder="Password" onChange={e => { setPassword(e.target.value) }} />
            <button onClick={() => onRegister()}>הרשמה</button>
          </div>
        </div>
      </div>
      <button className="toggle-button" onClick={toggleForm}>
        {islogin ? "להרשמה" : "להתחברות"}
      </button>
    </div>
  );
}

export default Log;