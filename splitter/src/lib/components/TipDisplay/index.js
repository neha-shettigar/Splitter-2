import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TipDisplay = ({tipAmount, totalBill}) => {
  const a = 10;
  return (
    <section className="tip-display-container">
      <article className="display-container">
        <div className="display-row">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">{tipAmount}</p>
        </div>
        <div className="display-row">
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">{totalBill}</p>
        </div>
      </article>
      <article className="vertical-center">
        <button
          className="btn"
          onClick={() => window.location.reload()}
          type="button">
          {' '}
          RESET{' '}
        </button>
      </article>
    </section>
  );
};
TipDisplay.propTypes = {
  tipAmount: PropTypes.number.isRequired,
  totalBill: PropTypes.number.isRequired,
};

export default TipDisplay;
