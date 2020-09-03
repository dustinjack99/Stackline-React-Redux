import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faHome } from '@fortawesome/free-solid-svg-icons';
export default class Tabs extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className='leftTab'>
        <div className='descDiv'>
          <img className='itemImg' src={item.image} alt='' />
          <h3 className='itemTitle'>{item.title}</h3>
          <p className='description'>{item.subtitle}</p>
          <ul className='tagDiv'>
            {item.tags.map((tag, i) => {
              return (
                <li className='tag' key={i}>
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className='linkDiv'>
            <div className='navLink'>
              <FontAwesomeIcon icon={faHome} />
              <h3 className='linkText'>OVERVIEW</h3>
            </div>
            <div className='navLink'>
              <FontAwesomeIcon icon={faChartBar} />
              <h3 className='linkText'>SALES</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
