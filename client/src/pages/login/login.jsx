import React, { useState } from 'react';
import "./login.css";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [signupFormState, setSignupFormState] = useState({name:"", email:"", password:""});



  function onChange(event) {
    if (event.target.name === "email") {
      setFormState({ ...formState, email: event.target.value });
    } else {
      setFormState({ ...formState, password: event.target.value });
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    console.log(formState); // or send to server for authentication
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  function handleSignupChange (event) {
    const { name, value } = event.target;
    setSignupFormState({...signupFormState, [name]: value});
  }

  function handleSignupSubmit(event) {
    event.preventDefault();
    console.log(signupFormState);
  }

  console.log("Submitting signup form:", signupFormState);


  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>You are logged in!</h2>
          <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div class="login-signup row row-col-auto justify-content-evenly">
          <div class="col">
            <h2>Login</h2>
            <form class="form login-form" onSubmit={handleLogin}>
              <div class="form-group">
                <label for="email">Email:</label><br />
                <input
                  class="input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder='e.g. alex@example.com '
                  onChange={onChange}
                />
              </div>
              <div class="form-group">
                <label for="password">Password:</label><br />
                <input
                  class="form-input"
                  type="password"
                  id="password"
                  placeholder="********"
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
          <form class="form signup-form" onSubmit={handleSignupSubmit}>
            <div class="form-group">
              <label for="name-signup">Name:</label><br />
              <input 
                class="form-input" 
                type="text" 
                placeholder='JOHN DOE' 
                id="name-signup" 
                name="name"
                onChange={handleSignupChange}
              />
            </div>
            <div class="form-group">
              <label for="email-signup">Email:</label><br />
              <input 
                class="form-input" 
                type="text" 
                placeholder='e.g. alex@example.com '  
                id="email-signup" 
                name="email"
                onChange={handleSignupChange}
              />
            </div>
            <div class="form-group">
              <label for="password-signup">Password:</label><br />
              <input 
                class="form-input" 
                type="password" 
                placeholder="********" 
                id="password-signup" 
                name="password"
                onChange={handleSignupChange}
              />
            </div><br />
            <div class="form-group">
              <button class="btn btn-primary" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
