import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="about-page-body">
          <div className="about-heading">
            Our Story
          </div>
          <div className="about-body">
            <p>
            The first mention of the Programming Society dates back to 2015.  
            </p>
            <p>
              Two MA Economics students were sitting in a lecture theatre, together despairing over their lack of understanding of the technology that had been fuelling and shaping the world around  them. They became unhappy in their own bubble and they wished to broaden their horizon by engaging with students from different fields.
            </p>
            <p>
              Not long after, two brave CS knights sensed the misery from far and committed themselves to rescue not only the two poor students but everyone who may have arrived to the same realisation.
            </p>
            <p>
              In 2016/17 the two knights took on their first cohort of 7 brave hearts. Some abandoned the mission and only the strongest and most determined persisted.
            </p>
            <p>
              By July 2017, the achievements of these first heroes were acknowledged by the almighty leader EUSA and the unit gained their official title as the University of Edinburgh Programming Society.
            </p>
            <p>
              Every week for two hours, the two knights and their students rode their pythons and fought against their ignorance. In ten weeks time the students learnt various warrior strategies from tying strings into loops, to negotiating IF conditions and creating machines of various functions. On the last day of their training, they managed to construct their own battlefield of Tic Tac Toe. As the unit grew, it were noticed by a beautiful Amazon who offered her support and many gifts to encourage more and more acts of heroism.
            </p>
            <p>
              Thus, the ProgSoc unit grew to 60 heroes in the first year and continues to welcome all brave hearts throughout the year. 
            </p>
          </div>
          <hr />
          <div className="about-heading">
            About the Society
          </div>
          <div className="about-body">
            <p>
              The University of Edinburgh Programming Society works as a platform connecting students across various disciplines interested in learning to code.
            </p>
            <p>
              We meet regularly every week on Thursday afternoon for up to two hours and we learn basics of programming under the friendly guidance of generous computer science students. Since the founding, we have mostly taught Python to beginners but we intend to extend the areas further. We aim to be very flexible at accommodating individual needs and so we always look for more tutors. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}
