import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
// import Admin from './pages/admin/admin-home/Admin.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Events from './pages/Events.js';
import AnnualEvents from './pages/AnnualEvents.js';
import News from './pages/News.js';
import Sponsors from './pages/Sponsors.js';
// import AdminLogin from './pages/admin/admin-login/AdminLogin.js';



function App() {

  
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/news">
          <News/>
        </Route>
        <Route exact path="/upcoming-events">
          <Events/>
        </Route>
        <Route exact path="/annual-events">
          <AnnualEvents/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/about">
          <About/>
       </Route>
       <Route exact path="/sponsors">
         <Sponsors/>
       </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
   
    
  );
}

export default App;
