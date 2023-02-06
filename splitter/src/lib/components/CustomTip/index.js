import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// this component takes custom tip as user input via input field
const CustomTip = ({value, show, selected, onChangeValue}) => {
  if (!show) return null;

  return (
    // main section
    <section className="custom-tip-container">
      {/* input field for taking the custom tip from user */}
      <input
        type="text"
        className="custom-tip-container__input"
        value={value}
        placeholder="Custom"
        selected
        onChange={onChangeValue}
      />
    </section>
  );
};

// propTypes for CustomTip component
CustomTip.propTypes = {
  value: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

export default CustomTip;
