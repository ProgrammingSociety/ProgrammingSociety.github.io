import React, { Component } from 'react';
import './App.css';
import { Home, About, Events, Contact, Resources, Members } from './Views/';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash
    }
    window.addEventListener("hashchange", e => {
      this.setState({route: window.location.hash});
    });
  }

  render() {
  
    document.title = "ProgSoc";
    switch (this.state.route) {
      case "":
        return (<Home />);
      case "#about":
        return (<About />);
      case "#events":
        return (<Events />);
      case "#contact":
        return (<Contact />);
      case "#resources":
        return (<Resources />);
      case "#members":
        return (<Members />);
      default:
        return (<div><br /><br /><br /><br /> Error 404: The route: "{this.state.route}" was not found </div>);
    }
  }
}

export default App;
