import React from "react";
import "./App.css";
import { Container, Input } from "@material-ui/core";
import { createHashHistory } from "history";

export const history = createHashHistory();

function App() {
  
  async function submitForm(formData) {
    const url = "http://localhost:3003/api/users/login";

    const form = formData.target;

    let user = {
      email: form.login,
      password: form.password,
    };

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

          <form className="App-form" onSubmit={submitForm}>
            <span className="App-fields">Usuário</span>
            <Input
              className={`App-fields loginInput`}
              type="text"
              color="secondary"
            ></Input>

            <span className="App-fields">Senha</span>

            <Input className={`App-fields loginInput`} type="password" ></Input>

            <button className="loginButton">
              Login
            </button>
          </form>
        </header>
      </Container>
    </div>
  );
}

export default App;
