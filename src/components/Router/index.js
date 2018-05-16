import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import Battlemechs from '../Battlemechs'
import Mechwarriors from '../Mechwarriors'
import Vehicles from '../Vehicles'
import Weapons from '../Weapons'
import About from '../About'
import './styles.css';

class Router extends Component {
  render() {
    return (
      <div className="Router">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/battlemechs" component={Battlemechs} />
          <Route path="/mechwarriors" component={Mechwarriors} />
          <Route path="/vehicles" component={Vehicles} />
          <Route path="/weapons" component={Weapons} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Router;