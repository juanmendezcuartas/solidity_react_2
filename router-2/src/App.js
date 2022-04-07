import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import User from './components/User';


function App() {
  //organizar el path de lo mas especifico a lo mas general o se puede agregar el exact
  return (
    <Router>
      <div className="Container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <NavLink to="/contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
        </div>
        <hr></hr>
        <Switch>
          <Route path="/nosotros/:id">
            <User></User>
          </Route>
          <Route path="/nosotros">
            <Nosotros></Nosotros>
          </Route>
          <Route path="/contacto">
            <Contacto></Contacto>
          </Route>
          <Route path="/" exact>
            <Inicio></Inicio>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
