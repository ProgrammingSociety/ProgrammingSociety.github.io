import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="contact-page-body">
          <div className="email-facebook">
            <a href="www.facebook.com/pg/programmingsociety">www.facebook.com/pg/programmingsociety</a>
            <br />
            ediprogsoc@gmail.com
          </div>
          <div className="contact-heading">
            Committee 2017/2018
          </div>
          <div className="contact-body">
            <p>
            <strong>President</strong> <br />
            Jennifer Za Nzambi <br />
            elvira.thea@yahoo.co.uk <br /> <br />

            <strong>Secretary</strong> <br />
            Kristyna Duongova <br />
            kristynaduong94@gmail.com <br /> <br />

            <strong>Head of Teaching</strong> <br />
            Jirka Vebr <br />
            jirkavebr@gmail.com <br /> <br /> <br />


            <strong>Tutors</strong> <br />
            Martin Svoboda &emsp;visgean@gmail.com <br />
            Petr Manas&emsp;&emsp;&emsp; s1652610@ed.ac.uk <br />
            Dylan Oshima&emsp;&emsp;s1764822@ed.ac.uk <br />
            Argyris Zardilis &emsp; azardilis@gmail.com <br />

            </p>
          </div>
        </div>
      </div>
    );
  }
}
