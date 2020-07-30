import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Loading(props) {
  return (
    <div
      className={[
        'app-loading',
        props.className,
        props.loading ? 'loading' : '',
      ].join(' ')}
    >
      <div className='app-loading__icon'></div>
    </div>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.any,
};

export default memo(Loading);
