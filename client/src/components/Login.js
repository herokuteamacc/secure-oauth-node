import React, { Fragment, useState } from "react";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);

      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
        <div class = "auth-form-body p-0">
        <h1>Sign In</h1>
        <form onSubmit={onSubmitForm}>
          <div class="form-group w-25">
            <div class="auth-form-body mt-8">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control my-3"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control my-3"
                value={password}
                onChange={(e) => onChange(e)}
              />
              <button className="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </form>
        </div>
    </Fragment>
  );
};

export default Login;
