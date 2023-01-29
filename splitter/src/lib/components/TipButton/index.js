import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TipButton = ({tip, handleTip, tipLabel}) => {
  const tipLa = 1;
  return (
    <section className="tip-container">
      <button
        className="tip-container__button"
        onClick={() => handleTip}
        type="button">
        {tipLabel}
      </button>
    </section>
  );
};
TipButton.propTypes = {
  tip: PropTypes.number.isRequired,
  handleTip: PropTypes.func.isRequired,
  tipLabel: PropTypes.string.isRequired,
};

export default TipButton;
