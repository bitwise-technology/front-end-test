import './App.css';
import Home from './pages/home/Home';
import Search from './pages/search/Search';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


function App() {

  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/search" component={Search}/> 
      </Switch>
    </Router>

    )
    
      

}

export default App;
