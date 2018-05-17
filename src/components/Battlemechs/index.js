import React, { Component } from 'react';
import './styles.css';
import firebase from 'firebase';

class Battlemechs extends Component {
  constructor(){
    super();
    this.state = {
      name: "test"
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('battletech-1');
    const nameRef = rootRef.child('ChassisID');
    nameRef.on('value', snap => {
      this.setState({
        name: snap.val()
      });
    });
  }

  render() {
    
    return(
      <section className="main">
        <div>
          <h1>This is: Battlemechs Component</h1>
        </div>
        <div>
          <h2>3025</h2>
          <select>
            <option value="allMechs">All BattleMechs</option>
            <option value="lightMechs">Light</option>
            <option value="mediumMechs">Medium</option>
            <option value="heavyMechs">Heavy</option>
            <option value="assaultMechs">Assault</option>
          </select> 
        </div>
        <div>
          <h1>{this.state.speed}</h1>
        </div>
      </section>
    );
  }
}

export default Battlemechs;