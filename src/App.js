import React from "react";
import "./App.css";
import {  Container, FormLabel, Input  } from "@material-ui/core";
import { createHashHistory } from 'history'

export const history = createHashHistory()

function App() {

  



  function submitForm() {
    
    history.push("/Dashboard");
  }

  return (
    <div className="App">
      <Container maxWidth="sm" className="App-container">
        <header className="App-header">
          <h1>Login</h1>

          <FormLabel className="App-form">
            <span className="App-fields" >Usuário</span>
            <Input className={`App-fields loginInput`} type="text"  color="secondary"></Input>

            <span className="App-fields">Senha</span>

            <Input className={`App-fields loginInput`}  type="password"  ></Input>

          <button onClick={submitForm} className="loginButton">Login</button>

          </FormLabel>
        </header>
      </Container>
    </div>
  );
}

export default App;
