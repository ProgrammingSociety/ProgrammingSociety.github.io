import React, { Component } from 'react';
import './App.css';
import { Home, About, Events, Contact, Resources, Members } from './Views/';


class App extends Component {
  render() {
    document.title = "ProgSoc";
    var url = window.location.href;
    switch (url) {
      case "http://localhost:3000/":
        return (<Home />);
      case "http://localhost:3000/about":
        return (<About />);
      case "http://localhost:3000/events":
        return (<Events />);
      case "http://localhost:3000/contact":
        return (<Contact />);
      case "http://localhost:3000/resources":
        return (<Resources />);
      case "http://localhost:3000/members":
        return (<Members />);
      default:
        return (<div><br /><br /><br /><br /> Error 404: The url: "{url}" was not found </div>);
    }
  }
}

export default App;
