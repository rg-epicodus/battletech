import React, { Component } from "react";
import "./styles.css";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top navbar-inner">
        <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar1"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar1">
              <ul class="nav navbar-nav navbar-center">
                <li><a href="/battlemechs">BATTLEMECHS</a></li>
                <li><a href="/weapons">WEAPONS</a></li>
                <li><a href="/mechwarriors">MECHWARRIORS</a></li>
                <li><a href="/vehicles">VEHICLES</a></li>
                <li><a href="/about">ABOUT</a></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;