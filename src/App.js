import React from "react";
import "./App.css";
import { Container, Input } from "@material-ui/core";
import { createHashHistory } from "history";
import { useFormik } from "formik";

export const history = createHashHistory();

function App() {
  const url = "http://localhost:3003/api/users/login";

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik),
      });
    },
  });

  return (
    <div className="App">
      <Container maxWidth="sm" className="App-container">
        <header className="App-header">
          <h1>Login</h1>

          <form className="App-form" onSubmit={formik.handleSubmit}>
            <span className="App-fields">Usuário</span>
            <input
              name="username"
              id="username"
              className={`App-fields loginInput`}
              type="text"
              color="secondary"
              onChange={formik.handleChange}
              value={formik.values.username}
            ></input>

            <span className="App-fields">Senha</span>

            <input
              name="password"
              id="password"
              className={`App-fields loginInput`}
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            ></input>

            <input type="submit" className="loginButton" value="Login" />
          </form>
        </header>
      </Container>
    </div>
  );
}

export default App;
