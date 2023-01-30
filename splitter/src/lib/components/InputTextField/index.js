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
      </label>
      {/* error message when value is equal to zero */}
      <span className="input-container__span">{errorMessage}</span>
      <form className="input-container__form">
        {/* input field for user inputs */}
        <input
          type="text"
          value={value}
          id="input-container__input"
          placeholder="0"
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
