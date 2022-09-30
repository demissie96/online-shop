import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

let email;
let password;
let remember;

function LoginPage() {
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    email = e.target.email.value;
    password = e.target.password.value;
    remember = e.target.remember.checked;

    console.log(email);
    console.log(password);
    console.log(remember);

    navigate("/shop");
  }

  return (
    <>
      <div className="text-center">
        <main className="form-signin">
          <form
            onSubmit={(e) => {
              login(e);
            }}
          >
            <img
              className="mb-4"
              src="/images/bootstrap-logo.svg"
              alt="logo"
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                name="email"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="password"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input name="remember" type="checkbox" value="remember-me" />{" "}
                Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017-2022</p>
          </form>
        </main>
      </div>
    </>
  );
}

export default LoginPage;
