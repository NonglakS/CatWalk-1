import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/13023">Start</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/:id" children={<App />} />
        </Switch>
      </div>
    </Router>
  )

}

render(<Routes />, document.getElementById('app'));