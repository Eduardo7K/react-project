import React from "react";
import "./App.css";
import { Container, Input } from "@material-ui/core";
import { createHashHistory } from "history";
import { useFormik } from 'formik';

export const history = createHashHistory();

function App() {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  console.log("teste fora");
  
  async function submitForm(formData) {
    //const url = "http://localhost:3003/api/users/login";

    const form = formData.target;

    let user = {
      email: form.login,
      password: form.password,
    };

    console.log("teste dentro");
    console.log(user);

    /*const data = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (data) {
    window.location.href = "dashboard.js";}
    else {alert("Login ou senha incorretos")}*/
  }



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

            <input name="password" id="password" className={`App-fields loginInput`} type="password" onChange={formik.handleChange} value={formik.values.password}></input>

            <input type="submit" className="loginButton" value="Login" />
            
          </form>
        </header>
      </Container>
    </div>
  );
} 

export default App;
