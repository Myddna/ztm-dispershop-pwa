import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomButton.module.scss';

const CustomButton = function ({ children, type, ...otherProps }) {
  return (
    <button className={styles.CustomButton} type={type} {...otherProps}>
      { children }
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.element)),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

CustomButton.defaultProps = {
  children: null,
  type: 'button',
};

export default CustomButton;
