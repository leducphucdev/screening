import React from 'react';

import './index.css';

const BoxReset = ({ onClick }: { onClick: any }) => {
  return (
    <div className='step__container'>
      <div className='step__container--reset' onClick={onClick}>Reset</div>
    </div>
  );
};

export default BoxReset;
