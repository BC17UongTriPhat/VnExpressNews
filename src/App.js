import Home from "./page/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayoutHeaderFooter from "./page/LayoutHeaderFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={false} path={["/"]} component={LayoutHeaderFooter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
