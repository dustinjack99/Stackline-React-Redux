import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faHome } from '@fortawesome/free-solid-svg-icons';
export default class Tabs extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className='tabsDiv'>
        <img src={item.image} alt='' />
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
        <ul>
          {item.tags.map((tag, i) => {
            return <li key={i}>{tag}</li>;
          })}
        </ul>
        <div>
          <FontAwesomeIcon icon={faHome} />
          <h3>Overview</h3>

          <FontAwesomeIcon icon={faChartBar} />
          <h3>Sales</h3>
        </div>
      </div>
    );
  }
}
