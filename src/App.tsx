import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

//pages
import Index from "./components/pages/Index";
import Register from "./components/pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
