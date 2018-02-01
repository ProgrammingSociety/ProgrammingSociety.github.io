import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Members extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="members-page-body">
          <div className="members-heading">
            Society Members
          </div>
          <div className="members-body">
            The members of our society are mostly undergraduate and postgraduate students of various backgrounds from social sciences, engineering to law or graphic design. 
      We understand that many students struggle to find the time to code in their free time.
      Therefore, we would like to acknowledge the effort of those who come along regularly and put in the extra effort to learn beyond the scope of their degree.
      
      The following are the members who participated in majority of our sessions and received a ProgSoc T-shirt to commemorate their good work:
      
      ______This will go to the Events page as a description____
      24.1. The teams had to complete two coding tasks and then were given 4 minutes to type the entire code on the board from memory. 
      This last task was to create a code that would take in the day and the month of the year as input and output the season of the year.
      All contestants were complete beginners at the beginning of the year and managed this task with grace.
      
      The winners were awarded £5 gift cards from our main sponsor Amazon and they are Jun, Victor and Sagar! Congratulations, guys :)
          </div>
        </div>
      </div>
    );
  }
}
