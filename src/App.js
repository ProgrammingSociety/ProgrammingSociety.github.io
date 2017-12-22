import React, { Component } from 'react';
import './App.css';
import { Home, About, Events, Contact, Resources, Members } from './Views/';


class App extends Component {
  render() {
    document.title = "ProgSoc";
    var url = window.location.href;
    switch (url) {
      case "https://programmingsociety.github.io/":
        return (<Home />);
      case "https://programmingsociety.github.io/about":
        return (<About />);
      case "https://programmingsociety.github.io/events":
        return (<Events />);
      case "https://programmingsociety.github.io/contact":
        return (<Contact />);
      case "https://programmingsociety.github.io/resources":
        return (<Resources />);
      case "https://programmingsociety.github.io/members":
        return (<Members />);
      default:
        return (<div><br /><br /><br /><br /> Error 404: The url: "{url}" was not found </div>);
    }
  }
}

export default App;
