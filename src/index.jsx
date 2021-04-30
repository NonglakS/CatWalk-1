import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import App from './components/App.jsx';
import {ThemeContextProvider} from "./components/themeContext.jsx"

export default function Routes() {
  return (
    <ThemeContextProvider>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:id" children={<App />} />
        </Switch>
    </Router>
    </ThemeContextProvider>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/13025">Start</Link>
    </div>
  )
}

render(<Routes />, document.getElementById('app'));
