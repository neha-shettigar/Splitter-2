import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// this component takes user inputs in the form of numbers
const InputTextField = ({value, onChangeValue, label, icon, errorMessage}) => {
  const a = 10;

  return (
    // main container
    <section className="input-container">
      {/* label for input field */}
      <label
        htmlFor="input-container__input"
        className="input-container__label">
        {label}
        <span className="input-container__span">{errorMessage}</span>
      </label>
      {/* error message when value is equal to zero */}

      <form className="input-container__form">
        {/* input field for user inputs */}
        <input
          type="number"
          value={value}
          className="input-container__input"
          placeholder="0"
          // disabled={value === '0'}
          onChange={onChangeValue}
        />
        {/* icon for the input field */}
        <img className="input-container__image" src={icon} alt="" />
      </form>
    </section>
  );
};

InputTextField.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func,
};

InputTextField.defaultProps = {
  onChangeValue: event => {},
};

export default InputTextField;
