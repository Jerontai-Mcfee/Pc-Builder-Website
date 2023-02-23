import React, { useState } from 'react';

function Login() {
  const [formState, setFormState] = useState({email:"", password:""})
  function onChange (event) {
    if (event.target.name === "email") {
      setFormState({...formState, email: event.target.value})
    } else {
      setFormState({...formState, password: event.target.value})
    }
    // <input class="form-input" type="text" id="email" name="email">
    // console.log(event.target.name)
    // console.log(event.target.value)
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState)
  }
  return (
    <div>
      <div class="login-signup row row-col-auto justify-content-evenly">
  <div class="col">
    <h2>Login</h2>
    <form class="form login-form" onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="email">Email:</label><br />
        <input
          class="form-input"
          type="text"
          id="email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div class="form-group">
        <label for="password">Password:</label><br />
        <input
          class="form-input"
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
      </div><br />
      <div class="form-group">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  </div>

  <div class="col">
    <h2>Signup</h2>
    <form class="form signup-form">
      <div class="form-group">
        <label for="name-signup">Name:</label><br />
        <input class="form-input" type="text" id="name-signup" />
      </div>
      <div class="form-group">
        <label for="email-signup">Email:</label><br />
        <input class="form-input" type="text" id="email-signup" />
      </div>
      <div class="form-group">
        <label for="password-signup">Password:</label><br />
        <input class="form-input" type="password" id="password-signup" />
      </div><br />
      <div class="form-group">
        <button class="btn btn-primary" type="submit">Sign Up</button>
      </div>
    </form>
  </div>
</div>
    </div>
  );
}

export default Login;
