import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import { BookProvider } from "./utils/GlobalState";

function App() {
  return (
    <div className="App">
      <Router>
        <BookProvider>
          <Header />
          <Switch>
            <Route exact path={["/", "/saved"]}>
              <Saved />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
          </Switch>
        </BookProvider>
      </Router>
    </div>
  );
}

export default App;
