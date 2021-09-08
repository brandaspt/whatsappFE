import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Registration from '../Registration/Registration';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      {/* <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/registration' component={Registration} />
      </Router> */}
      <Dashboard />
    </div>
  );
};

export default App;
