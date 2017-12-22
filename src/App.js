import React, { Component } from 'react';
import './App.css';
import { Home, About, Events, Contact, Resources, Members } from './Views/';


class App extends Component {
  render() {
    var url = window.location.href;
    switch (url) {
      case "http://ProgrammingSociety.github.io/":
        return (<Home />);
      case "http://ProgrammingSociety.github.io/about":
        return (<About />);
      case "http://ProgrammingSociety.github.io/events":
        return (<Events />);
      case "http://ProgrammingSociety.github.io/contact":
        return (<Contact />);
      case "http://ProgrammingSociety.github.io/resources":
        return (<Resources />);
      case "http://ProgrammingSociety.github.io/members":
        return (<Members />);
      default:
        return (<div> Error 404: "{url}" not found </div>);
    }
  }
}

export default App;
