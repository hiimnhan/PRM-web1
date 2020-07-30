import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mainItemBank } from '../../constants/mainItems.constants';

import './styles.scss';
import { useState } from 'react';

function Navbar(props) {
  const { onSelectedItem } = props;
  const [selectedTab, setSelectedTab] = useState('Banks');

  const handleOnClick = (name) => {
    setSelectedTab(name);
    onSelectedItem(name);
  };
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='logo-container navbar-item'>
          <p className='navbar-item__logo'>Enlavoka</p>
        </div>
        {mainItemBank.map((item) => (
          <div
            key={item.name}
            className='navbar-item'
            onClick={() => handleOnClick(item.name)}
          >
            <FontAwesomeIcon
              className={[
                'navbar-item__icon',
                selectedTab === item.name ? 'navbar-item__icon--selected' : '',
              ].join(' ')}
              icon={item.icon}
            />
            <p
              className={[
                'navbar-item__text',
                selectedTab === item.name ? 'navbar-item__text--selected' : '',
              ].join(' ')}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  onSelectedItem: PropTypes.func,
};

export default Navbar;
