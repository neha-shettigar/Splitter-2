import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// this component takes custom tip as user input via input field
const CustomTip = ({value, onChangeValue}) => {
  const a = 10;

  return (
    // main section
    <section className="custom-tip-container">
      {/* input field for taking the custom tip from user */}
      <input
        type="number"
        className="custom-tip-container__input"
        value={value}
        placeholder="Custom"
        maxLength="2"
        onChange={onChangeValue}
      />
    </section>
  );
};

// propTypes for CustomTip component
CustomTip.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export default CustomTip;
