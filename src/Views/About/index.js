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
            About the Society
          </div>
          <div className="about-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non felis eu mi tempus blandit in ultricies ipsum. Mauris tincidunt dapibus suscipit. Integer neque justo, dictum eget imperdiet in, elementum non odio. Pellentesque vel metus id purus sodales pellentesque. Integer vulputate vitae tortor a finibus. Sed condimentum arcu vel varius eleifend. Duis id lorem rutrum, eleifend lacus at, pretium velit. Curabitur nec elit lorem. Nunc pharetra consequat dui, non maximus lacus varius vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            </p>
            <p>
              Pellentesque facilisis, ex at pellentesque interdum, libero nulla molestie justo, ut volutpat est enim in ex. Phasellus quis enim volutpat, ullamcorper risus sit amet, porttitor dolor. Aliquam pretium quam luctus tellus malesuada consequat. In ac magna viverra, fermentum ante ac, hendrerit tortor. Donec vel purus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vel convallis enim, vitae semper sem. Pellentesque pulvinar nunc ut lacus efficitur, vitae imperdiet diam lobortis. Aenean non facilisis risus. Nam lectus sapien, mattis sit amet mauris at, sodales condimentum odio. Aenean in dui vel risus semper porta. Aliquam eu rhoncus ante. Aenean laoreet auctor erat, at facilisis arcu porta a. Ut eu sapien tortor. Duis urna nisi, tincidunt auctor risus id, vehicula sodales nisi. Maecenas quis vestibulum enim.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
