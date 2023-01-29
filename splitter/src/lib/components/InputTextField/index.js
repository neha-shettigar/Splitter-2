import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputTextField = ({
  input,
  handleInput,
  inputLabel,
  image,
  errorMessage,
}) => {
  if (input) return input;
  return (
    <section className="input-container">
      <label
        htmlFor="input-container__input"
        className="input-container__label">
        {inputLabel}
      </label>
      <form className="input-container__form">
        <input
          type="number"
          value={input}
          onChange={handleInput}
          id="input-container__input"
        />
      </form>
      <img alt="" />
    </section>
  );
};
InputTextField.propTypes = {
  input: PropTypes.number.isRequired,
  handleInput: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default InputTextField;
