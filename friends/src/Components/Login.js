import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValue = {
  username: "",
  password: "",
};

export default function Login(props) {
  const [credentials, setCredentials] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
