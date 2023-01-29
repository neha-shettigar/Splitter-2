import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CustomTip = ({customTip, handleCustomTip}) => {
  const a = 10;
  return (
    <section className="custom-tip-container">
      <input
        type="text"
        className="custom-tip-container__input"
        value={customTip}
        onChange={handleCustomTip}
        placeholder="custom"
      />
    </section>
  );
};
CustomTip.propTypes = {
  customTip: PropTypes.string.isRequired,
  handleCustomTip: PropTypes.func.isRequired,
};

export default CustomTip;
