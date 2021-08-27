import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import DataTable from "./components/DataTable";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/">
          <div>
            <DataTable></DataTable>
            {/* Hello Radhe,
            <Link to="/records">Records</Link> */}
          </div>
        </Route>
        <Route path="/records">
          <div>
            <DataTable></DataTable>
          </div>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
