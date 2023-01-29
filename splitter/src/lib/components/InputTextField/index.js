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
  const a = 10;
  return (
    <section className="input-container">
      <label
        htmlFor="input-container__input"
        className="input-container__label">
        {inputLabel}
      </label>
      <form className="input-container__form">
        <input
          type="text"
          onChange={handleInput}
          // value={input}
          id="input-container__input"
        />
        <img className="input-container__image" src={image} alt="" />
      </form>
    </section>
  );
};
InputTextField.propTypes = {
  input: PropTypes.string.isRequired,
  handleInput: PropTypes.func,
  inputLabel: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
InputTextField.defaultProps = {
  handleInput: event => {},
};

export default InputTextField;
