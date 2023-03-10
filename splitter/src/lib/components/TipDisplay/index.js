import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// this component displays the tip amount per person and also
// total bill per person
const TipDisplay = ({
  tipAmount,
  totalBill,
  disableResetBtn,
  show,
  onClickButton,
}) => {
  if (!show) return null;

  return (
    // main container
    <section className="tip-display-container">
      {/* for displaying tip amount and total bill */}
      <article className="tip-display-container__display">
        {/* a row in the display */}
        <section className="tip-display-container__row">
          <aside className="tip-display-container__caption">
            {/* to display tip amount per person */}
            <p className="tip-display-container__header">Tip Amount</p>
            <p className="tip-display-container__unit">/ person</p>
          </aside>
          <p className="tip-display-container__amt">
            {isNaN(tipAmount) ? '$0.00' : `$${tipAmount}`}
          </p>
        </section>

        {/* a row in the display */}
        <section className="tip-display-container__row">
          <aside className="tip-display-container__caption">
            {/* to display total amount per person */}
            <p className="tip-display-container__header">Total</p>
            <p className="tip-display-container__unit">/ person</p>
          </aside>
          <p className="tip-display-container__amt">
            {isNaN(totalBill) ? '$0.00' : `$${totalBill}`}
          </p>
        </section>
      </article>

      {/* contains the reset button */}
      <article className="tip-display-container__reset">
        <button
          className={`tip-display-container__button${
            disableResetBtn ? '_disabled' : ''
          }`}
          disabled={disableResetBtn}
          onClick={onClickButton}
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
  show: PropTypes.bool.isRequired,
  disableResetBtn: PropTypes.bool.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default TipDisplay;
