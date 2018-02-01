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
      
      
   
      </div>
    );
  }
}
