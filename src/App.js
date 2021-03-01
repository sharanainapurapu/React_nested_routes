import './App.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, SignIn, About } from './screens';
import { Header } from "./components";
import AppConfig from "./container/appConfig";
function App() {
  return (
    <>
      <Router>
        <Header />
        <AppConfig>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/about" component={About}>
              <About />
            </Route>
          </Switch>
        </AppConfig>
      </Router>    
    </>
  );
}

export default App;
