import React from "react";

const login = () => {
  const handleClick = () => {};

  return (
    <form>
      <h4>Login</h4>
      <label>UserName</label>
      <br />
      <input type="text" />

      <br />
      <br />

      <label>Password</label>
      <br />
      <input type="password" />

      <br />
      <br />

      <button onClick={handleClick}>Login</button>
    </form>
  );
};

export default login;
