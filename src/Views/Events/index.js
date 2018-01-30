import React, { Component } from 'react';
import { Event, Navbar } from '../../Components';
import './styles.css';

export default class Events extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="events-page-body">
          <div className="events-heading">
            Society Events
          </div>
          <div className="events-body">
            {/* <Event date="30/12/2017" time="17:30 - 19:00" title="Some Future Event" location="LG.10 - DHT" facebook="http://www.google.com" />          
            <Event date="22/12/2017" time="17:30 - 19:00" title="Some Future Event" location="LG.10 - DHT" />           */}
            <Event date="28/03/2018" time="17:00 - 19:00" title="AGM" location="LG.07 - DHT" />   
            <Event date="21/03/2018" time="17:00 - 19:00" title="Guest speaker(s)" location="LG.07 - DHT" />   
            <Event date="14/03/2018" time="17:00 - 19:00" title="Members Competition for Amazon prizes." location="LG.07 - DHT" />   
            <Event date="07/03/2018" time="17:00 - 19:00" title="CMU - TBD" location="LG.07 - DHT" />   
            <Event date="28/02/2018" time="17:00 - 19:00" title="CMU - TBD" location="LG.07 - DHT" />   
            <Event date="14/02/2018" time="17:00 - 19:00" title="CMU - TBD" location="LG.07 - DHT" />   
            <Event date="07/02/2018" time="17:00 - 19:00" title="Basic introduction to Machine Learning" location="LG.07 - DHT" />   
            <Event date="31/01/2018" time="17:00 - 19:00" title="Building Probability Simulations" location="LG.07 - DHT" facebook="https://www.facebook.com/events/2048758225401279/" />            
            <Event date="24/01/2018" time="17:00 - 19:00" title="Programming Refreshers' & Refreshment" location="LG.07 - DHT" facebook="https://www.facebook.com/events/1650966814989911/" />
            <Event date="30/11/2017" time="17:30 - 19:00" title="Pre-Christmas CMU" location="LG.10 - DHT" facebook="https://www.facebook.com/events/100880230699940/" />
            <Event date="23/11/2017" time="17:30 - 19:00" title="CMU IX - Tic Tac Toe" location="LG.10 - DHT" facebook="https://www.facebook.com/events/1948773472111318/" />
            <Event date="16/11/2017" time="17:30 - 19:00" title="CMU VIII - Tic Tac Toe" location="LG.10 - DHT" facebook="https://www.facebook.com/events/1948773472111318/" />
            <Event date="14/11/2017" time="18:00 - 19:30" title="The Inner Life of Alexa" location="LT4 - Appleton Tower" facebook="https://www.facebook.com/events/185472718695043/" />
            <Event date="09/11/2017" time="17:30 - 19:00" title="CMU VII - Tic Tac Toe" location="LG.10 - DHT" facebook="https://www.facebook.com/events/1948773472111318/" />
            <Event date="02/11/2017" time="17:30 - 19:00" title="CMU VI" location="LG.10 - DHT" facebook="https://www.facebook.com/events/1476146592502761/" />
            <Event date="19/10/2017" time="17:30 - 19:00" title="CMU V" location="LG.07 - DHT" facebook="https://www.facebook.com/events/120148392015561/" />
            <Event date="12/11/2017" time="17:30 - 19:00" title="CMU IV" location="LG.10 - DHT" facebook="https://www.facebook.com/events/1773596356045425/" />
            <Event date="05/10/2017" time="17:30 - 19:00" title="CMU III" location="G.06 - 50 George Square" facebook="https://www.facebook.com/events/1952132905112122/" />
            <Event date="05/10/2017" time="17:00 - 16:30" title="CMU II" location="LG.07 DHT" />
            <Event date="21/09/2017" time="17:00 - 16:30" title="CMU I" location="LG.07 DHT" facebook="https://www.facebook.com/events/745263835661256/" />
            <Event date="20/09/2017" time="21:00 - 23:00" title="TPB AFK Screening" location="The Study - Teviot Row House" facebook="https://www.facebook.com/events/853632288132272/" />
            <Event date="16/09/2017" time="14:00 - 17:00" title="Coding Marathon for Beginners" location="LG.07 - DHT" facebook="https://www.facebook.com/events/269897510186882/" />
          </div>
        </div>
      </div>
    );
  }
}
