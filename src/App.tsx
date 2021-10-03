import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AllAnswers from "./Components/AllAnswers/AllAnswers";
import QuestionForm from "./Components/QuestionForm/QuestionForm";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export const client = new W3CWebSocket(
  "wss://pickfu-challenge-api.herokuapp.com/"
);
console.log(client.OPEN)
client.onopen = () => {
  console.log("Testing");
};
function App() {
  useEffect(() => {
    client.onopen = () => {
      console.log("Testing");
    };
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={QuestionForm} />
          <Route exact path="/all-answers" component={AllAnswers} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
