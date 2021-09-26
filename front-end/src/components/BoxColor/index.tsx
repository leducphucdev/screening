import React from 'react';

interface Props {
  step: string,
  state: string,
  onClick: any,
}

const BoxColor = ({ step, state, onClick }:Props) => {
  const handleClick = (): void => {
    onClick({
      step: step,
    });
  }

  return (
    <div className={`step__container ${step} ${state === step ? 'boder-red' : ''}`}>
      <div className='step__container--child' onClick={handleClick}>{step}</div>
    </div>
  );
};

export default BoxColor;
