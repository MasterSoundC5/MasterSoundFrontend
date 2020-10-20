import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path='/' 
            component={Home} 
          />
          <Route 
            exact 
            path='/signin' 
            component={SignIn} 
          />
          <Route 
            exact 
            path='/register' 
            component={Register} 
          />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
