import React from 'react';
import PropTypes, {bool} from 'prop-types';
import './styles.scss';

// this component consists of various buttons for various tip percentages
const TipButton = ({value, onClickButton, label, show, selected}) => {
  if (!show) return null;

  return (
    // main container for displaying buttons
    <section className="tip-container">
      {/* button with quique values */}
      <button
        className={`tip-container__button${selected ? '_selected' : ''}`}
        type="button"
        value={value}
        selected
        onClick={() => onClickButton(value)}>
        {label}
      </button>
    </section>
  );
};

TipButton.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default TipButton;
