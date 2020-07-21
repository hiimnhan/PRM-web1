import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faQuestionCircle,
  faLanguage,
  faUniversity,
  faCalculator,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './styles.scss';

const iconList = [faUniversity, faCalculator];
const itemList = ['Banks', 'Calculation'];

function Carousel(props) {
  const { item, quantity = '50' } = props;
  const icon = iconList[itemList.indexOf(item)];
  return (
    <div className='carousel'>
      <div className='carousel-icon-container'>
        <FontAwesomeIcon className='carousel-icon' icon={icon} size={'2x'} />
      </div>
      <p className='carousel-text'>{item}</p>
      <div className='carousel-quantity'>{quantity}</div>
    </div>
  );
}

Carousel.propTypes = {};

export default Carousel;