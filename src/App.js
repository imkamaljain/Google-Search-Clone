import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Results } from './index';
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={Results} />
      </Switch>
    </Router>
  );
}