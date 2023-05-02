import React, { useState } from 'react'

function Login({ setisLogin }) {
  const [username, setusername] = useState("");
  
  const [password, setpassword] = useState("");
  const login = () => {
    if (username === "Admin" && password === "press1234") {
      setisLogin(true);
    } else {
      alert("Wrong Login Details");
    }
  };
  return (
    <div>
      <div className="heading_container heading_center ">
        <h2>
          Login <span>First</span>
        </h2>
        <form>
          <input
            placeholder="Username"
            type="text"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input type="submit" value="Login" onClick={login} />
        </form>
      </div>
    </div>
  );
}

export default Login