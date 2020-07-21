import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  mainItemBank,
  mainItemEnglish,
} from '../../constants/mainItems.constants';

import './styles.scss';
import { bankActions } from '../../redux/actions/banks.actions';

import { connect } from 'react-redux';

const ITEM_BANK_NAME = 'Banks';
const ITEM_CALC_NAME = 'Calculations';
function Navbar(props) {
  const { getAllBanks } = props;

  const handleOnClick = (name) => {
    if (name === ITEM_BANK_NAME) getAllBanks();
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
            onClick={handleOnClick(item.name)}
          >
            <FontAwesomeIcon className='navbar-item__icon' icon={item.icon} />
            <p className='navbar-item__text'>{item.name}</p>
          </div>
        ))}
      </div>
    </nav>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...dispatch,
    getAllBanks: () => dispatch(bankActions.getAllBanksRequest()),
  };
};

Navbar.propTypes = {
  getAllBanks: PropTypes.any,
};

export default connect(null, mapDispatchToProps)(Navbar);
