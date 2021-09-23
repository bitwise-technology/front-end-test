import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Details from './pages/Details';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route  path="/" exact component={Landing} />
        <Route path="/Details" exact component={Details} />
      </Switch>
    </Router>
  );
}

export default Routes;