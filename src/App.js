import React,{useContext} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FabricJSCanvas } from './components/draw/page';
import { AuthenticationImage } from './components/login/login';
import Register from './components/login/register';
import Draw from './components/draw/page';
function App() {












  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Register} />
         
          <Route path='/sign-up' component={AuthenticationImage} />
          <Route path='/sign' component={Draw} />
          
          
           
  

        </Switch>
      </Router>
    </>
  );
}

export default App;
