import './App.css';
import { Switch, Route } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import Login from './Pages/Login';



function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/'><SignUp /></Route>
        <Route exact path='/login'><Login /></Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
