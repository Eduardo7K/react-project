import React from "react";
import "./App.css";
import { Container, Input } from "@material-ui/core";
import { useFormik } from "formik";
import history from '../utils/history';


function Home() {
  const url = "http://localhost:3003/api/users/login";

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      const data = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik),
      });
      console.log("data = ")
      //console.log(await data.json());
      const response = await data.json();
      console.log(response);
      if (response) {
        console.log("login com sucesso!")
        history.push('/dashboard');
      } else {
        console.log("falha login")
      }
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

export default Home;
