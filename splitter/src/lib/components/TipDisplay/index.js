import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// this component displays the tip amount per person and also
// total bill per person
const TipDisplay = ({tipAmount, totalBill, disableResetBtn}) => {
  // if (tipAmount) return null;
  const a = 10;

  return (
    // main container
    <section className="tip-display-container">
      {/* for displaying tip amount and total bill */}
      <article className="tip-display__display">
        {/* a row in the display */}
        <section className="tip-display__row">
          <aside className="tip-display__caption">
            {/* to display tip amount per person */}
            <p className="tip-display__header">Tip Amount</p>
            <p className="tip-display__unit">/ person</p>
          </aside>
          <p className="tip-display__amt">
            {isNaN(tipAmount) ? '$0.00' : tipAmount}
          </p>
        </section>

        {/* a row in the display */}
        <section className="tip-display__row">
          <aside className="tip-display__caption">
            {/* to display total amount per person */}
            <p className="tip-display__header">Total</p>
            <p className="tip-display__unit">/ person</p>
          </aside>
          <p className="tip-display__amt">
            {isNaN(totalBill) ? '$0.00' : totalBill}
          </p>
        </section>
      </article>

      {/* contains the reset button */}
      <article className="tip-display__reset">
        <button
          className="tip-display__button"
          disabled={disableResetBtn}
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
  disableResetBtn: PropTypes.bool.isRequired,
};

export default TipDisplay;
