import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "../src/components/Home";
import AddCustomer from '../src/components/AddCustomer';
import Customers from '../src/components/Customers'
import NavTab from "./Headers/NavTab";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="py-4">
          <NavTab />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/customer" component={Customers} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
