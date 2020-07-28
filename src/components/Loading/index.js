import React from 'react';
import LoadingImage from '../../assets/images/loading.gif';
import './styles.scss';
function Loading(props) {
  return (
    <div className='loading-container'>
      <img src={LoadingImage} alt='' className='loading-image' />
    </div>
  );
}

export default Loading;
