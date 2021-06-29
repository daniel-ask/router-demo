import "./App.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Nav from "./components/Nav";

function App() {
	const authenticated = true;
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        {authenticated ? <Route path="/about" component={About} /> : <Redirect to="/"/>}
        <Route path="/countries" exact component={Countries} />
        <Route path="/countries/:code" component={Country} />
        <Route render={() => <h1>404 PAGE NOT FOUND!</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
