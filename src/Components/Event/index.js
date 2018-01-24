import React, { Component } from 'react';
import './styles.css';

export default class Event extends Component {

  // constructor(props) {
  //   super(props);
  // }

  dateToString = (date) => {
    switch (date[1]) {
      case '01':
        return 'JAN';
      case '02':
        return 'FEB';
      case '03':
        return 'MAR';
      case '04':
        return 'APR';
      case '05':
        return 'MAY';
      case '06':
        return 'JUN';
      case '07':
        return 'JUL';
      case '08':
        return 'AUG';
      case '09':
        return 'SEP';
      case '10':
        return 'OCT';
      case '11':
        return 'NOV';
      case '12':
        return 'DEC';
      default:
        return 'N/A';
    }
  }

  openEvent = () => {
    window.location.href = this.props.facebook;
  }

  render() {

    let dateArr       = this.props.date.split('/');
    let formattedDate = dateArr[1] + '/' + (parseInt(dateArr[0], 10) + 1) + '/' + dateArr[2];
    let currDate      = new Date();
    let eventDate     = new Date(formattedDate);
    let dateClass     = 'date-middle';
    if (currDate >= eventDate) {
      dateClass += ' event-finished';
    }
    else {
      dateClass += ' event-upcoming';
    }
    
    if (this.props.facebook != null) {
      return (
        <div className="event-container">
          <div className="event-date">
            <span className={dateClass}>
              {dateArr[0]}<br/>{this.dateToString(dateArr)}
            </span>
          </div>
          <div className="event-body">
            <a className="event-title clickable" href={this.props.facebook}>{this.props.title}</a>
            <div className="event-time">{this.props.time}</div>          
            <div className="event-location">{this.props.location}</div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="event-container">
          <div className="event-date">
            <span className={dateClass}>
              {dateArr[0]}<br/>{this.dateToString(dateArr)}
            </span>
          </div>
          <div className="event-body">
            <div className="event-title">{this.props.title}</div>
            <div className="event-time">{this.props.time}</div>          
            <div className="event-location">{this.props.location}</div>
          </div>
        </div>
      );
    }
  }
}
