import React from 'react';


export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"></input> <br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname"></input>
        <button type="submit">Login</button>
        </form>
    </div>
  );
}